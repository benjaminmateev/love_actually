/* eslint-disable camelcase */
import type { NextApiRequest, NextApiResponse } from 'next'
import { Signup } from '../../types/signup'
import { createSignup } from '../../utils/airtable'

interface SignupResponseData {
  message: string;
  id?: string;
  error?: string;
}

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<SignupResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  const { firstname, lastname, email, phone, gender, city, referred_by } = req.body as Signup

  if (!firstname || !lastname || !phone || !gender || !city || !email || !referred_by) {
    return res.status(400).json({ message: 'Information that are required are missing' })
  }

  try {
    const result = await createSignup(firstname, lastname, email, phone, gender, city, referred_by)
    if (result.success) {
      res.status(200).json({ message: 'Signup added successfully', id: result.id })
    } else {
      res.status(500).json({ message: 'Error signing up', error: result.error })
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: (error as Error).message })
  }
}
