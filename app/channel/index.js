import axios from 'axios'
import address from './address'
import producer from './producer'

export default class Channel {

  getStackOverflowPosts () {
    const gen_url = address.stackOverFlowPosts()
    return axios.get(gen_url)
      .then(
        res => producer.stackOverFlowPosts(res.data),
        error => {throw `Ошибка сервера или парсинга данных. ${error}`}
      )
      .catch(
        error => {throw `Ошибка при парсинге данных. ${error}`}
      )
  }

  getGitHubRepositories () {
    const gen_url = address.gitHubRepositories()
    return axios.get(gen_url)
      .then(
        res => producer.gitHubRepositories(res.data),
        error => {throw `Ошибка сервера или парсинга данных. ${error}`}
      )
      .catch(
        error => {throw `Ошибка при парсинге данных. ${error}`}
      )
  }

  getGitHubRecordDetail (repoName) {
    const gen_url = address.gitHubRepositoryDetail(repoName)
    return axios.get(gen_url)
      .then(
        res => producer.gitHubRepositoryDetail(res.data),
        error => {throw `Ошибка сервера или парсинга данных. ${gen_url} ${error}`}
      )
      .catch(
        error => {throw `Ошибка при парсинге данных. ${error}`}
      )
  }

  getStackOverflowPostDetail (postId) {
    const gen_url = address.stackOverflowPostDetail(postId)
    return axios.get(gen_url)
      .then(
        res => producer.stackOverflowPostDetail(res.data.items[0]),
        error => {throw `Ошибка сервера или парсинга данных. ${error}`}
      )
      .catch(
        error => {throw `Ошибка при парсинге данных. ${error}`}
      )
  }

}
