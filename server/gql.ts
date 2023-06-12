export function discussionGql(ghDiscussionCategoryId: string | undefined) {
  return `{
  repository(name:"Dev-Blogs", owner: "yendoan2001") {
    discussions(categoryId: "${ghDiscussionCategoryId}", first: 100) {
      edges {
        node {
          title
          url
          bodyHTML
          bodyText
          createdAt
          lastEditedAt
          author {
            login
            url
            avatarUrl
          }
          labels(first: 100) {
            nodes {
              name
            }
          }
        }
      }
    }
  }
  }`
}
