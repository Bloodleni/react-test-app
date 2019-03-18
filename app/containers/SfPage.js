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

export default class SfPage extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>SfPage</Text>
      </View>
    )
  }
}