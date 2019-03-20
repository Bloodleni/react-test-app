const producer = {

  stackOverFlowPosts: (res) => {
    let posts = []
    let post
    res.items.forEach((item, index) => {
      post = {
        id: item.post_id,
        user: item.owner.display_name,
        title: item.title
      }

      posts.push(post)
    })

    return posts
  }
  
}

export default producer