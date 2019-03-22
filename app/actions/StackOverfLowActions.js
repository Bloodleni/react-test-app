import Channel from '../channel/index'

export const GET_STACKOVERFLOW_POSTS = 'GET_STACKOVERFLOW_POSTS'
export const GET_STACKOVERFLOW_POSTS_SUCCESS = 'GET_STACKOVERFLOW_POSTS_SUCCESS'
export const GET_STACKOVERFLOW_POSTS_FAIL = 'GET_STACKOVERFLOW_POSTS_FAIL'

function getPosts() {
  return dispatch => {
    dispatch({
      type: GET_STACKOVERFLOW_POSTS,
      payload: []
    })

    const channel = new Channel()
    return channel.getStackOverflowPosts()
      .then(data =>
        dispatch({
          type: GET_STACKOVERFLOW_POSTS_SUCCESS,
          payload: data
        })
      )
      .catch(error =>
        dispatch({
          type: GET_STACKOVERFLOW_POSTS_FAIL,
          payload: new Error(error),
          error: true
        })
      )
  }
}

export {
  getPosts
}
