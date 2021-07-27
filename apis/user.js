import { request } from "@/plugins/request";

export const login = (data) => {
  return request({
    method: 'POST',
    url: '/api/users/login',
    data
  })
}

export const register = (data) => {
  return request({
    method: 'POST',
    url: '/api/users',
    data
  })
}

// 获取用户信息
export const getUserInfo = () => {
  return request({
    method: 'get',
    url: '/api/user',
  })
}

// 更新用户信息
export const updateUserInfo = (data) => {
  return request({
    method: 'PUT',
    url: '/api/user',
    data
  })
}