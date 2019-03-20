import React, { Component } from 'react'
import { 
  createBottomTabNavigator, 
  createAppContainer, 
  createStackNavigator, 
} from 'react-navigation'
import StackOverflowContainer from '../containers/StackOverflowContainer'
import GhPage from '../containers/GhPage'
import DetailsPage from '../containers/DetailsPage'

const SfStack = createStackNavigator(
  { 
    StackOverflow: { screen: StackOverflowContainer },
    Details: { screen: DetailsPage }
  }
)

const GhStack = createStackNavigator({
  GitHub: { screen: GhPage },
  Details: { screen: DetailsPage },
})

const AppBottomTabNavigator = createBottomTabNavigator(
  {
    StackOverflow: { screen: SfStack },
    GitHub: { screen: GhStack },
  },
  {
    defaultNavigationOptions: () => ({
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    })
  }
)

const AppContainer = createAppContainer(AppBottomTabNavigator)

export default class App extends Component {
  render () {
    return (
      <AppContainer />
    )
  }
}