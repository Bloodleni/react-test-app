import React, { Component } from 'react'
import styled from 'styled-components'
import { Modal, View } from 'react-native'
import { withNavigation } from 'react-navigation'

const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  background-color: #FFFFFF;
`

const Title = styled.Text`
  text-align: center;
  font-size: 18px;
  padding: 10px;
`

const GoButton = styled.Button`

`

const CloseButton = styled.Button`

`

class ModalScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      urlParam: this.props.navigation.getParam('urlParam', 'error'),
      fromPage: this.props.navigation.getParam('fromPage', '')
    }
  }

  goDetail () {
    const { urlParam, fromPage } = this.state
    this.props.navigation.navigate('Detail', {
      urlParam: urlParam,
      fromPage: fromPage
    })
  }

  render () {
    return (
      <ModalContainer>
        <Title>Сonfirm your choice</Title>
        <GoButton
          onPress={() => this.goDetail()}
          title="Go to detail"
        >
        </GoButton>
        <CloseButton
          onPress={() => this.props.navigation.goBack()}
          title="Close modal"
        >
        </CloseButton>
      </ModalContainer>
    )
  }
}

export default withNavigation(ModalScreen)
