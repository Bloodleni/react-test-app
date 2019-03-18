import React, { Component } from 'react'
import { 
    View, 
    Text, 
    StyleSheet 
} from 'react-native'
import { 
    createBottomTabNavigator, 
    createAppContainer, 
    createStackNavigator, 
} from 'react-navigation'
import SfPage from './SfPage'
import GhPage from './GhPage'
import DetailsPage from './DetailsPage'

const SfStack = createStackNavigator({
  Sf: { screen: SfPage },
  Details: { screen: DetailsPage },
})

const GhStack = createStackNavigator({
  Gh: { screen: GhPage },
  Details: { screen: DetailsPage },
})

const AppBottomTabNavigator = createBottomTabNavigator(
    {
        Sf: { screen: SfStack },
        Gh: { screen: GhStack },
    },
)

const AppContainer = createAppContainer(AppBottomTabNavigator)

export default class App extends Component {
  render () {
    return (
      <AppContainer />
    )
  }
}