import { useState, useEffect } from 'react'
import { InviteResponse } from '../../types/invite'

// Defines the endpoint based on the current window location
const API_BASE = process.env.API_ENDPOINT || (typeof window !== 'undefined' && (window.location.origin + '/api'))
const INVITE_ENDPOINT = API_BASE + '/invite'

interface HookResult {
  inviteResponse: InviteResponse | null,
  inviteError: string | null,
}

// Helper function that invokes the invite API endpoint
async function fetchInvite (code: string): Promise<InviteResponse> {
  const requestUrl = new URL(INVITE_ENDPOINT)
  requestUrl.searchParams.append('code', code)
  const response = await fetch(requestUrl)
  if (!response.ok) {
    throw new Error('Invalid code')
  }
  const invite = await response.json()
  return invite
}

// The custom hook
export default function useInvite (): HookResult {
  // This hook has the inviteResponse and a possilbe error as state.
  const [inviteResponse, setInviteResponse] = useState<InviteResponse | null>(null)
  const [inviteError, setInviteError] = useState<string | null>(null)

  // We want to make the API call when the component using the hook
  // is mounted so we use the useEffect hook.
  useEffect(() => {
    // We read the code from the current window URL.
    const url = new URL(window.location.toString())
    const code = url.searchParams.get('code')

    if (!code) {
      // If there is no code, we set an error message.
      setInviteError('No code provided')
    } else {
      // If we have a code, we get the associated data.
      // In case of success or failure we update the state accordingly.
      fetchInvite(code)
        .then(setInviteResponse)
        .catch(err => {
          setInviteError(err.message)
        })
    }
  }, [])

  // We return the state variables and the updateRsvp function.
  return { inviteResponse, inviteError }
}
