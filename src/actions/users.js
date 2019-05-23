export const get_users = () => {
  return {
    type: 'FETCH_USER_REQUESTS'
  }
}



// 发送一个 action
// 先发送 reducer
// 后被saga 监听