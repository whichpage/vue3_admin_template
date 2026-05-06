export interface LoginResponse {
  code: number
  data: string
  message: string
}

export interface UserInfoResponse {
  code: number
  data: {
    username: string
    roles: string[]
  }
  message: string
}
