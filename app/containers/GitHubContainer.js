import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getRepositories } from '../actions/GitHubActions'
import RepositoryList from '../components/gitHub/RepositoryList'

class GitHubContainer extends Component {
  static navigationOptions = {
    title: 'Repository',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render () {
    const { gitHub, getRepo } = this.props
    return (
      <RepositoryList
        repositories={gitHub.repositories}
        isFetching={gitHub.isFetching}
        error={gitHub.error}
        getData={getRepo}
      />
    )
  }
}

const mapStateToProps = store => {
  return {
    gitHub: store.gitHub,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getRepo: () => dispatch(getRepositories())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (GitHubContainer)
