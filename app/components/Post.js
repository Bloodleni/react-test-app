import React, { Component } from 'react'
import styled from 'styled-components'
import { ListItem } from 'react-native-elements'
import PostModal from './PostModal'

export default class Post extends Component {
  onPress = () => {
    return <PostModal />
  }
  render () {
    const { user, title, id } = this.props.item
    return (
      <ListItem
        title={user}
        subtitle={title}
        onPress={this.onPress}
      />
    )
  }
}