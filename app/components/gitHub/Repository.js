import React, { Component } from 'react'
import { ListItem } from 'react-native-elements'
import { withNavigation } from 'react-navigation'

class Repository extends Component {
  onPress = () => {
    const { repoName } = this.props.data
    this.props.navigation.navigate('MainModal', {
      urlParam: {
        repoName: repoName
      },
      fromPage: 'GitHub'
    })
  }

  render () {
    const { id, user, name, avatarURL } = this.props.data
    return (
      <ListItem
        title={user}
        subtitle={name}
        onPress={this.onPress}
        leftAvatar={{
          source: avatarURL && { uri: avatarURL },
        }}
      />
    )
  }
}

export default withNavigation(Repository)
