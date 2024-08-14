/* eslint-disable camelcase */
import Airtable, { FieldSet, Record } from 'airtable'
import { Invite } from '../types/invite'

// make sure all the necessary env vars are set
if (!process.env.AIRTABLE_API_KEY) {
  throw new Error('AIRTABLE_API_KEY is not set')
}
if (!process.env.AIRTABLE_BASE_ID) {
  throw new Error('AIRTABLE_BASE_ID is not set')
}

interface AirtableResponse {
  success: boolean;
  id?: string;
  error?: string;
}

// create a new Airtable client and gets a reference to the
// airtable base containing our invites
const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
const base = airtable.base(process.env.AIRTABLE_BASE_ID)

// function used to "sanitize" query data and avoid injections
function escape (value: string): string {
  if (value === null || typeof value === 'undefined') {
    return 'BLANK()'
  }

  if (typeof value === 'string') {
    const escapedString = value
      .replace(/'/g, "\\'")
      .replace(/\r/g, '')
      .replace(/\\/g, '\\\\')
      .replace(/\n/g, '\\n')
      .replace(/\t/g, '\\t')
    return `'${escapedString}'`
  }

  if (typeof value === 'number') {
    return String(value)
  }

  if (typeof value === 'boolean') {
    return value ? '1' : '0'
  }

  throw Error('Invalid value received')
}

export function getInviteRecord (inviteCode: string): Promise<Record<FieldSet>> {
  return new Promise((resolve, reject) => {
    base('invites')
      // runs a query on the `invites` table
      .select({
        filterByFormula: `{code} = ${escape(inviteCode)}`,
        maxRecords: 1
      })
      // reads the first page of results
      .firstPage((err, records) => {
        if (err) {
          // propagate errors
          console.error(err)
          return reject(err)
        }

        // if the record could not be found
        // we consider it an error
        if (!records || records.length === 0) {
          return reject(new Error('Invite not found'))
        }

        // returns the first record
        resolve(records[0])
      })
  })
}

// get an invite by invite code (promisified)
export async function getInvite (inviteCode: string): Promise<Invite> {
  const inviteRecord = await getInviteRecord(inviteCode)
  return {
    code: String(inviteRecord.fields.code),
    firstname: String(inviteRecord.fields.firstname),
    lastname: String(inviteRecord.fields.lastname),
    email: String(inviteRecord.fields.email)
  }
}

export async function updateRsvp (inviteCode: string, rsvp: boolean): Promise<void> {
  // Gets the raw Airtable id of the record to update
  const { id } = await getInviteRecord(inviteCode)

  return new Promise((resolve, reject) => {
    base('invites').update(id, { coming: rsvp ? 'yes' : 'no' }, (err) => {
      if (err) {
        return reject(err)
      }

      resolve()
    })
  })
}

export async function createSignup (firstname: string, lastname: string, email: string, phone: string, gender: string, city: string, instagram: string, linkedin: string, website: string, referred_by: string[]): Promise<AirtableResponse> {
  try {
    const records = await base('signups').create([
      {
        fields: {
          firstname,
          lastname,
          email,
          phone,
          gender,
          city,
          instagram,
          linkedin,
          website,
          referred_by
        }
      }
    ])

    console.log('Added record:', records[0].getId())
    return { success: true, id: records[0].getId() }
  } catch (error) {
    console.error('Error adding record to Airtable', error)
    return { success: false, error: (error as Error).message }
  }
}
