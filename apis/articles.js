import { request } from "@/plugins/request";

// 获取所有文章
export const getAllArticles = (params) => {
  return request({
    method: 'get',
    url: '/api/articles',
    params
  })
}

// 获取关注文章
export const getFeedArticles = (params) => {
  return request({
    method: 'get',
    url: '/api/articles/feed',
    params
  })
}

// 获取文章的tag
export const getTags = () => {
  return request({
    method: 'get',
    url: '/api/tags',
  })
}

// 点赞
export const addFavorite = (slug) => {
  return request({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`,
  })
}

// 取消点赞
export const deleteFavorite = (slug) => {
  return request({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`,
  })
}

// 获取文章详情
export const getArticleDetail = (slug) => {
  return request({
    method: 'GET',
    url: `/api/articles/${slug}`
  })
}

// 获取评论
export const getComments = (slug) => {
  return request({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  })
}

// 评论文章
export const addComment = (slug, data) => {
  return request({
    method: 'post',
    url: `/api/articles/${ slug }/comments`,
    data
  })
}

// 删除评论
export const deleteComment = (slug, id) => {
  return request({
    method: 'delete',
    url: `/api/articles/${ slug }/comments/${ id }`,
  })
}

// 新增文章
export const addArticle = (data) => {
  return request({
    method: 'post',
    url: `/api/articles`,
    data
  })
}

// 删除文章
export const deleteArticle = (slug) => {
  return request({
    method: 'delete',
    url: `/api/articles/${ slug }`,
  })
}
