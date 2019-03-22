import React, { Component } from 'react'
import styled from 'styled-components'
import { FlatList } from 'react-native'
import Post from './Post'
import { ActivityIndicator, TouchableWithoutFeedback } from 'react-native'

const Separator = styled.View`
  height: 1;
  width: 100%;
  background-color: #CED0CE;
`
const ListContainer = styled.View`
  flex: 1;
`
const LoadingContainer = styled.View`
  padding-vertical: 20;
  border-top-width: 1;
  border-color: #CED0CE;
`
const ErrorContainer = styled.View`
  padding-top: 20px;
  align-items: center;
`
const ErrorText = styled.Text`
  font-size: 16px;
  color: #FF0000;
`
const RefreshButton = styled.View`
  margin-top: 30px;
  margin-bottom: 30px;
  width: 150px;
  align-items: center;
  background-color: #2196F3;
`
const RefreshButtonText = styled.Text`
  font-size: 16px;
  padding: 15px;
  color: white;
`

export default class PostList extends Component {
  constructor(props) {
    super(props)
    const { isFetching } = this.props
    this.state = {
      refreshing: false
    }
  }

  componentDidMount () {
    this.makeRemoteRequest()
  }

  handleRefresh = () => {
    this.setState(
      { refreshing: true },
      () => this.makeRemoteRequest()
    )
  }

  makeRemoteRequest = () => {
    this.props.getData()
      .then(this.setState({ refreshing: false })
    )
  }

  renderTemplate = () => {
    const { isFetching, error, posts } = this.props
    if (error) {
      return (
        <ErrorContainer>
          <ErrorText>{error.toString()}</ErrorText>

          <TouchableWithoutFeedback
              onPress={this.makeRemoteRequest}
              >
            <RefreshButton>
              <RefreshButtonText>Refresh</RefreshButtonText>
            </RefreshButton>
          </TouchableWithoutFeedback>
        </ErrorContainer>
      )
    }

    if (isFetching) {
      return (
        <LoadingContainer>
          <ActivityIndicator animating size="large" />
        </LoadingContainer>
      )
    } else {
      return (
        <FlatList
          data={posts}
          renderItem={({item}) => (
            <Post
              data={item}
            />
          )}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={Separator}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh}
        />
      )
    }

  }

  render () {
    return (
      <ListContainer>
        {this.renderTemplate()}
      </ListContainer>
    )
  }
}
