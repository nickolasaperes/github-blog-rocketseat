import { useForm } from 'react-hook-form'
import { PostCard } from '../PostCard'
import {
  PostListContainer,
  PostListContent,
  PostListHeader,
  PostListHeaderTitle,
  SearchInput,
} from './styles'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContextSelector } from 'use-context-selector'
import { BlogContext } from '../../context/BlogContext'

export interface PostCardType {
  id: number
  title: string
  summary: string
  url: string
  createdAt: string
}

interface PostListProps {
  posts: PostCardType[]
}

const searchFormSchema = z.object({
  query: z.string(),
})

type searchFormInput = z.infer<typeof searchFormSchema>

export function PostList({ posts }: PostListProps) {
  const fetchPosts = useContextSelector(
    BlogContext,
    (context) => context.fetchPosts,
  )
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<searchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchPosts(data: searchFormInput) {
    if (isSubmitting) return
    await fetchPosts(data.query)
  }

  return (
    <PostListContainer>
      <PostListHeader>
        <PostListHeaderTitle>
          <h2>Publicações</h2>
          <span>{posts.length} publicações</span>
        </PostListHeaderTitle>
        <form onSubmit={handleSubmit(handleSearchPosts)}>
          <SearchInput
            type="text"
            placeholder="Buscar conteúdo"
            {...register('query')}
          />
        </form>
      </PostListHeader>

      <PostListContent>
        {posts.map((post) => {
          return (
            <PostCard
              key={post.id}
              title={post.title}
              summary={post.summary}
              url={post.url}
              createdAt={post.createdAt}
            />
          )
        })}
      </PostListContent>
    </PostListContainer>
  )
}
