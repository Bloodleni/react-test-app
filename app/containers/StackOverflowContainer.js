import React, { Component } from 'react'
import { connect } from 'react-redux'
import getPostsStackOverFlow from '../actions/StackOverfLowActions'
import Posts from '../components/Posts'

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
    const { postsData, getPosts } = this.props
    return (
      <Posts postsData={postsData} getPosts={getPosts}/>
    )
  }
}

const mapStateToProps = store => {
  return {
    postsData: store.stackOverflowPosts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => dispatch(getPostsStackOverFlow())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (StackOverflowContainer)