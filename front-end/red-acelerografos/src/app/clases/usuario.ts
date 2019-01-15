export interface Usuario {
  token?: string,
  username?: string,
  password?: string,
  first_name?: string,
  last_name?: string,
  email?: string,
  key?: string,
  url?: string,
}

export interface Auth {
  user_id: number,
  email: string,
  token: string,
  username: string,
}
