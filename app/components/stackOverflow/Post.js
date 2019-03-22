import React, { Component } from 'react'
import { ListItem } from 'react-native-elements'
import { withNavigation } from 'react-navigation'

class Post extends Component {
  onPress = () => {
    const { id } = this.props.data
    this.props.navigation.navigate('MainModal', {
      urlParam: {
        id: id
      },
      fromPage: 'StackOverflow'
    })
  }

  render () {
    const { id, user, title, avatarURL } = this.props.data
    return (
      <ListItem
        title={user}
        subtitle={title}
        onPress={this.onPress}
        leftAvatar={{
          source: avatarURL && { uri: avatarURL },
        }}
      />
    )
  }
}

export default withNavigation(Post)
