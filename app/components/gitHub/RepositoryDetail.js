import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'

const RepositoryContainer = styled.View`
  flex: 1;
  background-color: #fafbfc;
`
const Title = styled.View`
  flex-direction:row;
  padding: 10px;
  justify-content: center;
`

const User = styled.Text`
  font-size: 18px;
  color: #0366d6;
  text-decoration: none;
`

const PathDivider = styled.Text`
  font-size: 18px;
  color: #586069;
  margin: 0 2px;
`

const Name = styled.Text`
  font-size: 18px;
  color: #0366d6;
  text-decoration: none;
  font-weight: bold;
`

const Detail = styled.View`
`

const Description = styled.Text`
  font-size: 16px;
  color: #24292e;
  padding: 10px;
`


export default class RepositoryDetail extends Component{
  render () {
    const { user, name, description } = this.props
    return (
      <RepositoryContainer>
        <Title>
          <User>{user}</User>
          <PathDivider>/</PathDivider>
          <Name>{name}</Name>
        </Title>
        <Detail>
          <Description>{description}</Description>
        </Detail>
      </RepositoryContainer>
    )
  }
}
