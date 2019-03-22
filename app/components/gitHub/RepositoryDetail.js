import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class RepositoryDetail extends Component{
  render () {
    const { user, name, description } = this.props
    return (
      <View>
        <View>
        <Text>{user}</Text>
  </View>
          <View>
          <Text>{name}</Text>
    </View>
            <View>
            <Text>{description}</Text>
      </View>
      </View>
    )
  }
}
