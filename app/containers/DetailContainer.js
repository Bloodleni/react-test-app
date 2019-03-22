import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  InteractionManager,
  TouchableWithoutFeedback
} from 'react-native'
import detailActions from '../actions/DetailsScreenActions'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'
import RepositoryDetail from '../components/gitHub/RepositoryDetail'
import PostDetail from '../components/stackOverflow/PostDetail'

const MainContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
  background-color: #FFFFFF;
`
const ErrorContainer = styled.View`
  padding-top: 20px;
  align-items: center;
`
const ErrorText = styled.Text`
  font-size: 16px;
  color: #FF0000;
`
const RefreshButton = styled.View`
  margin-top: 30px;
  margin-bottom: 30px;
  width: 150px;
  align-items: center;
  background-color: #2196F3;
`
const RefreshButtonText = styled.Text`
  font-size: 16px;
  padding: 15px;
  color: white;
`

class DetailContainer extends Component {
  constructor (props) {
    super(props)
    this.urlParam = this.props.navigation.getParam('urlParam', 'error'),
    this.fromPage = this.props.navigation.getParam('fromPage', '')
  }

  componentDidMount () {
    InteractionManager.runAfterInteractions(() => {
      this.makeRemoteRequest()
    })
  }

  makeRemoteRequest = () => {
    const { fromPage, urlParam } = this
    const { getRepositoryDetail, getPostDetail } = this.props.detailActions
    if (fromPage === 'GitHub') {
      getRepositoryDetail(urlParam.repoName)
    }
    else if (fromPage === 'StackOverflow') {
      getPostDetail(urlParam.id)
    } else {

    }
  }

  renderTemplate () {
    const { isFetching, error, details } = this.props.detail
    const { fromPage } = this
    if (error) {
      return (
        <ErrorContainer>
          <ErrorText>{error.toString()}</ErrorText>

          <TouchableWithoutFeedback
              onPress={this.makeRemoteRequest}
              >
            <RefreshButton>
              <RefreshButtonText>Refresh</RefreshButtonText>
            </RefreshButton>
          </TouchableWithoutFeedback>
        </ErrorContainer>
      )
    }

    if (fromPage === 'GitHub') {
      return (
        <RepositoryDetail
          user={details.user}
          name={details.name}
          description={details.description}
        />
      )
    }

    return (
      <PostDetail
        user={details.user}
        name={details.name}
        description={details.description}
      />
    )
  }

  render () {
    const urlParam = this.props.navigation.getParam('urlParam')
    return (
      <MainContainer>
        {this.renderTemplate()}
      </MainContainer>
    )
  }
}

const mapStateToProps = store => {
  return {
    detail: store.repositoryDetail
  }
}

const mapDispatchToProps = dispatch => {
  return {
    detailActions: bindActionCreators(Object.assign({}, detailActions), dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (DetailContainer)
