export type TLoginPayload = { username: string; password: string }

export type TLoginResponse = { accessToken: string }

export type TUser = {
  username: string
  email: string
  firstName: string
  lastName: string
}
