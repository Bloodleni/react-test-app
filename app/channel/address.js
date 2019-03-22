const address = {
  stackOverFlowPosts: () => `http://api.stackexchange.com/2.2/posts?order=desc&sort=activity&site=stackoverflow&filter=!B96R(B)RCWjDDUBpZjHSxGCoVmu0Y9`,

  stackOverFlowDetailPost: (id) => `http://api.stackexchange.com/2.2/posts/${id}?order=desc&sort=activity&site=stackoverflow&filter=!-Kh.ck(g0MIFG6ryB.0fHQHG8oodVADi5`,

  gitHubRepositories: () => `https://api.github.com/repositories`,

  gitHubDetailRepository: (repo) => `https://api.github.com/repos/${repo}`, //fullrepo
}

export default address
