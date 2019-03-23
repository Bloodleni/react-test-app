import React, { Component } from 'react'
import { View, Text, WebView } from 'react-native'

export default class PostDetail extends Component{
  render () {
    const { user, title, body } = this.props
    return (
      <WebView
        originWhitelist={['*']}
        source={{html: body}}
        ref={'webview'}
        automaticallyAdjustContentInsets={false}
      />
    )
  }
}
