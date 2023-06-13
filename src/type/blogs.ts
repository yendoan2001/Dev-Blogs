export interface BlogPosts {
    id?: number,
    url?: string
    discussionUrl?: string
    lastEdited?: string
    tags?: string[]
    bodyText?: string
    HTML?: string
    createdAt?: string
    title?: string
    author?: {
        name?: string,
        avatar?: string,
        url?: string
    }
}