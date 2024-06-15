import { PostCard } from '../PostCard'
import {
  PostListContainer,
  PostListContent,
  PostListHeader,
  PostListHeaderTitle,
  SearchInput,
} from './styles'

export function PostList() {
  return (
    <PostListContainer>
      <PostListHeader>
        <PostListHeaderTitle>
          <h2>Publicações</h2>
          <span>6 publicações</span>
        </PostListHeaderTitle>
        <SearchInput type="text" placeholder="Buscar conteúdo" />
      </PostListHeader>

      <PostListContent>
        <PostCard />
        <PostCard />
      </PostListContent>
    </PostListContainer>
  )
}
