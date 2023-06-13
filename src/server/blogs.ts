import {discussionGql} from './gql'
import {BlogPosts} from "@/type/blogs";

const API_URL = 'https://api.github.com/graphql'
const GH_ACCESS_TOKEN = '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'
const DISCUSSION_CATEGORY_ID = process.env.DISCUSSION_CATEGORY_ID

export async function getBlogs(): Promise<BlogPosts[]> {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${GH_ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: discussionGql(DISCUSSION_CATEGORY_ID),
    }),
  })
  let res = await response.json()
  const discussions = res.data.repository.discussions.nodes
  const posts = discussions.map((discussion: any): BlogPosts => {
    const {
      title,
      author,
      createdAt,
      lastEditedAt: lastEdited,
      number: id,
      bodyHTML: HTML,
      bodyText,
      url: discussionUrl,
      labels,
    } = discussion
    const url = `/blog/${id}`
    const authorURL = author.url
    const authorAvatar = author.avatarURL
    const authorName = author.login
    const tags: string[] = labels.nodes.map((tag: {name: string}) => {
      return tag.name
    })
    const post = {
      id,
      url,
      discussionUrl,
      lastEdited,
      tags,
      bodyText,
      HTML,
      createdAt,
      title,
      author: {url: authorURL, name: authorName, avatar: authorAvatar},
    }
    return post
  })
  return posts
}
