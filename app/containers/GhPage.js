import React, { Component } from 'react'
import { 
    View,
    Text,
    StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default class GhPage extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>GhPage</Text>
      </View>
    )
  }
}