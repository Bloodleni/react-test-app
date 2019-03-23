import Channel from '../channel/index'

export const GET_GITHUB_REPOSITORY_DETAIL = 'GET_GITHUB_REPOSITORY_DETAIL'
export const GET_GITHUB_REPOSITORY_DETAIL_SUCCESS = 'GET_GITHUB_REPOSITORY_DETAIL_SUCCESS'
export const GET_GITHUB_REPOSITORY_DETAIL_FAIL = 'GET_GITHUB_REPOSITORY_DETAIL_FAIL'

export const GET_STACKOVERFLOW_POST_DETAIL = 'GET_STACKOVERFLOW_POST_DETAIL'
export const GET_STACKOVERFLOW_POST_DETAIL_SUCCESS = 'GET_STACKOVERFLOW_POST_DETAIL_SUCCESS'
export const GET_STACKOVERFLOW_POST_DETAIL_FAIL = 'GET_STACKOVERFLOW_POST_DETAIL_FAIL'

function getRepositoryDetail(repositoryName) {
  //alert(repositoryName)
  return dispatch => {
    dispatch({
      type: GET_GITHUB_REPOSITORY_DETAIL,
      payload: []
    })
    const channel = new Channel
    channel.getGitHubRecordDetail(repositoryName)
      .then(data =>
        dispatch({
          type: GET_GITHUB_REPOSITORY_DETAIL_SUCCESS,
          payload: data
        })
      )
      .catch(error =>
        dispatch({
          type: GET_GITHUB_REPOSITORY_DETAIL_FAIL,
          payload: new Error(error)
        })
      )
  }
}

function getPostDetail(postId) {
  return dispatch => {
    dispatch({
      type: GET_STACKOVERFLOW_POST_DETAIL,
      payload: []
    })

    const channel = new Channel
    channel.getStackOverflowPostDetail(postId)
      .then(data =>
        dispatch({
            type: GET_STACKOVERFLOW_POST_DETAIL_SUCCESS,
            payload: data
        })
      )
      .catch(error =>
        dispatch({
          type: GET_STACKOVERFLOW_POST_DETAIL_FAIL,
          payload: new Error(error)
        })
      )
  }
}

export default {
  getRepositoryDetail,
  getPostDetail
}
