import { defineStore } from 'pinia'
import { reqLogin } from '@/api/user/index'
import type { LoginResponse } from '@/api/user/types'

let useUserStore = defineStore('user', {
  state: () => ({
    return: {
        token: localStorage.getItem('token') || '',
    }
  }),
  actions: {
    async userLogin(data: { username: string, password: string }) {
      const res = await reqLogin(data)
      const result = res.data
      if (result.code === 200) {
        this.return.token = result.data
        localStorage.setItem('token', result.data)
        return result
      } else {
        return Promise.reject(new Error(result.message))
      }
    }
  }, 
  getters: {
    
  }
})

export default useUserStore