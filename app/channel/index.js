import axios from 'axios'
import address from './address'
import producer from './producer'

export default class Channel {

  getStackOverflowPosts () {
    const gen_url = address.stackOverFlowPosts()
    //return Promise.resolve(producer.stackOverFlowPosts(this.data))
    return axios.get(gen_url)
    .then(res => producer.stackOverFlowPosts(res.data) )
    .catch((error) => {
      alert(error)
    })
  }

}