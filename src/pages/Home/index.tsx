import { PostList } from '../../components/PostList'
import { UserCard } from '../../components/UserCard'
import { HomeContainer } from './styles'
import { BlogContext } from '../../context/BlogContext'
import { useContextSelector } from 'use-context-selector'

export function Home() {
  const userData = useContextSelector(
    BlogContext,
    (context) => context.userData,
  )
  const posts = useContextSelector(BlogContext, (context) => context.posts)

  return (
    <HomeContainer>
      <UserCard
        name={userData.name}
        username={userData.username}
        description={userData.description}
        organization={userData.organization}
        followers={userData.followers}
        profileURL={userData.profileURL}
        profilePictureURL={userData.profilePictureURL}
      />
      <PostList posts={posts} />
    </HomeContainer>
  )
}
