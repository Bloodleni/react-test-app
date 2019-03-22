import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../actions/StackOverfLowActions'
import PostsList from '../components/stackOverflow/PostList'

class StackOverflowContainer extends Component {
  static navigationOptions = {
    title: 'Posts',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render () {
    const { stackOverflow, getPosts } = this.props
    return (
      <PostsList
        posts={stackOverflow.posts}
        isFetching={stackOverflow.isFetching}
        error={stackOverflow.error}
        getData={getPosts}
      />
    )
  }
}

const mapStateToProps = store => {
  return {
    stackOverflow: store.stackOverflow
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => dispatch(getPosts())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (StackOverflowContainer)
