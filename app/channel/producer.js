const producer = {

  stackOverFlowPosts: (res) => {
    const posts = []
    let post

    if (!res.items) {
      throw 'Параметр "res.items" не идентифицирован'
    }

    res.items.forEach((item) => {
      post = {
        id: item.post_id,
        user: item.owner.display_name,
        avatarURL: item.owner.profile_image,
        title: item.title
      }

      posts.push(post)
    })

    return posts
  },

  gitHubRepositories: (res) => {
    const repositories = []
    let repository

    if (!res) {
      throw 'Параметр "res" не идентифицирован'
    }

    res.forEach((item) => {
      repository = {
        id: item.id,
        avatarURL: item.owner.avatar_url,
        user: item.owner.login,
        name: item.name,
        repoName: item.full_name
      }

      repositories.push(repository)
    })

    return repositories
  },

  gitHubRepositoryDetail: (res) => {
    const detail = {
      id: res.id,
      user: res.owner.login,
      name: res.name,
      description: res.description
    }

    return detail
  },

  stackOverflowPostDetail: (res) => {
    const detail = {
      id: res.post_id,
      user: res.owner.display_name,
      title: res.title,
      body: res.body
    }

    return detail
  }
}

export default producer
