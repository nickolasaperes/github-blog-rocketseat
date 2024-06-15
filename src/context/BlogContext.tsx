import { ReactNode, useCallback, useEffect, useState } from 'react'
import { PostCardType } from '../components/PostList'
import { api } from '../lib/api'
import { dateFormatDistanceToNow } from '../utils/formatters'
import { createContext } from 'use-context-selector'

interface UserDataType {
  name: string
  username: string
  description: string
  profilePictureURL: string
  organization?: string
  followers: number
  profileURL: string
}

interface BlogContextType {
  username: string
  repo: string
  posts: PostCardType[]
  userData: UserDataType
  fetchPosts: (query?: string) => Promise<void>
}

export const BlogContext = createContext({} as BlogContextType)

interface BlogContextProviderProps {
  children: ReactNode
}

export function BlogContextProvider({ children }: BlogContextProviderProps) {
  const [userData, setUserData] = useState<UserDataType>({} as UserDataType)
  const [posts, setPosts] = useState<PostCardType[]>([])

  const username = 'nickolasaperes'
  const repo = 'nickolasaperes/github-blog-rocketseat'

  const fetchGithubProfile = useCallback(async () => {
    const response = await api.get(`/users/${username}`)
    const data = response.data

    const userData = {
      name: data.name,
      username: data.login,
      description: '',
      profilePictureURL: data.avatar_url,
      organization: data.company,
      followers: data.followers,
      profileURL: data.html_url,
    }
    setUserData(userData)
  }, [username])

  useEffect(() => {
    fetchGithubProfile()
  }, [fetchGithubProfile])

  const fetchPosts = useCallback(
    async (query?: string) => {
      const searchQuery = query ? `${query} repo:${repo}` : `repo:${repo}`
      const response = await api.get('/search/issues', {
        params: {
          q: searchQuery,
        },
      })
      const data = response.data

      const posts = data.items.map((issue) => {
        return {
          id: issue.number,
          title: issue.title,
          summary: issue.body,
          url: `/post/${issue.number}`,
          createdAt: dateFormatDistanceToNow(new Date(issue.created_at)),
        }
      })
      setPosts(posts)
    },
    [repo],
  )

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <BlogContext.Provider
      value={{
        posts,
        userData,
        username,
        repo,
        fetchPosts,
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}
