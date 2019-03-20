const address = {
  stackOverFlowPosts: () => `http://api.stackexchange.com/2.2/posts?order=desc&sort=activity&site=stackoverflow&filter=!-Kh.ck(g0MIFG6ry9WKUUk*m1XYDzvLk5`,

  stackOverFlowDetailsPost: (id) => `http://api.stackexchange.com/2.2/posts/${id}?order=desc&sort=activity&site=stackoverflow&filter=!-Kh.ck(g0MIFG6ryB.0fHQHG8oodVADi5`,

  gitHubRepo: () => `https://api.github.com/repositories`,

  gitHubDetailsRepo: (repo) => `https://api.github.com/repos/${repo}`, //fullrepo
}

export default address