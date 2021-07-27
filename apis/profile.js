import { request } from "@/plugins/request";

// 关注xxx
export const followSomeone = (username) => {
  return request({
    method: 'post',
    url: `/api/profiles/${ username }/follow`,
  })
}

// 取关xxx
export const unFollowSomeone = (username) => {
  return request({
    method: 'delete',
    url: `/api/profiles/${ username }/follow`,
  })
}

// 获取xx信息
export const getSomeoneInfo = (username) => {
  return request({
    method: 'get',
    url: `/api/profiles/${ username }`,
  })
}