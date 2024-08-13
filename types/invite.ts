export interface Invite {
  code: string,
  firstname: string,
  lastname: string,
  email: string,
}

export interface InviteResponse {
  invite: Invite
}
