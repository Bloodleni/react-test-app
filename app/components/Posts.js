import React, { Component } from 'react'
import styled from 'styled-components'
import { FlatList } from 'react-native'
import Post from './Post'

const Separator = styled.View`
  height: 1;
  width: 100%;
  background-color: #CED0CE;
`

export default class Posts extends Component {
  componentDidMount () {
    this.props.getPosts()
  }

  render () {
    const { posts } = this.props.postsData
    return (
      <FlatList
        data={posts}
        renderItem={({item}) => (<Post item={item}/>)}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={Separator}
      />
    )
  }
}