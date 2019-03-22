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

  getGitHubRecordDetail (fullName) {
    const gen_url = address.gitHubDetailRepository(fullName)
    return axios.get(gen_url)
      .then(
        res => producer.gitHubRepositoryDetail(res.data),
        error => {throw `Ошибка сервера или парсинга данных. ${gen_url} ${error}`}
      )
      .catch(
        error => {throw `Ошибка при парсинге данных. ${error}`}
      )
  }

  getStackOverflowRecordDetail (fullName) {
    /*const gen_url = address.stackOverFlowDetailPost(fullName)
    return this.getDataTest()//axios.get(gen_url)
      .then(
        data => producer.gitHubRepo(data),
        error => {throw `Ошибка сервера или парсинга данных. ${error}`}
      )
      .catch(
        error => {throw `Ошибка при парсинге данных. ${error}`}
      )*/
  }

}
