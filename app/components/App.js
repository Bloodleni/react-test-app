import React, { Component } from 'react'
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator,
} from 'react-navigation'
import GitHubContainer from '../containers/GitHubContainer'
import StackOverflowContainer from '../containers/StackOverflowContainer'
import DetailContainer from '../containers/DetailContainer'
import ModalScreen from './ModalScreen'

const StackOverflowStack = createStackNavigator(
  {
    StackOverflow: { screen: StackOverflowContainer },
    Detail: { screen: DetailContainer }
  }
)

const GitHubStack = createStackNavigator(
  {
    GitHub: { screen: GitHubContainer },
    Detail: { screen: DetailContainer },
  }
)

const AppBottomTabNavigator = createBottomTabNavigator(
  {
    GitHub: { screen: GitHubStack },
    StackOverflow: { screen: StackOverflowStack },
  },{
    defaultNavigationOptions: () => ({
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    })
  }
)

const Rootstack = createStackNavigator(
  {
    MainStack: { screen: AppBottomTabNavigator},
    MainModal: { screen: ModalScreen}
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
)

const AppContainer = createAppContainer(Rootstack)

export default class App extends Component {
  render () {
    return (
      <AppContainer />
    )
  }
}
