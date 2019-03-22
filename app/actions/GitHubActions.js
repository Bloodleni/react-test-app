import Channel from '../channel/index'

export const GET_GITHUB_REPOSITORIES = 'GET_GITHUB_REPOSITORIES'
export const GET_GITHUB_REPOSITORIES_SUCCESS = 'GET_GITHUB_REPOSITORIES_SUCCESS'
export const GET_GITHUB_REPOSITORIES_FAIL = 'GET_GITHUB_REPOSITORIES_FAIL'

function getRepositories () {
  return dispatch => {
    dispatch({
      type: GET_GITHUB_REPOSITORIES,
      payload: []
    })

    const channel = new Channel()
    return channel.getGitHubRepositories()
      .then(data =>
        dispatch({
          type: GET_GITHUB_REPOSITORIES_SUCCESS,
          payload: data
        })
      )
      .catch(error =>
        dispatch({
          type: GET_GITHUB_REPOSITORIES_FAIL,
          payload: new Error(error)
        })
      )
  }
}

export {
  getRepositories
}
