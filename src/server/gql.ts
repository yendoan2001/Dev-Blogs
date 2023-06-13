export function discussionGql(ghDiscussionCategoryId: string | undefined) {
  return `{
   repository(name: "Dev-Blogs", owner: "yendoan2001") {
    discussions(categoryId: "DIC_kwDOJuNPo84CXJDp", first: 100) {
        nodes {
          title
          url
          bodyHTML
          number
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
  }`
}
