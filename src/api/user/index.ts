import request from '@/utils/request'
import type { LoginResponse, UserInfoResponse } from './types'

enum API {
  LOGIN_URL = '/admin/acl/index/login',
  USERINFO_URL = '/api/user/info',
  LOGOUT_URL = '/api/user/logout',
}

export const reqLogin = (data: any ) => {
    return request.post<LoginResponse>(API.LOGIN_URL, data)
}
