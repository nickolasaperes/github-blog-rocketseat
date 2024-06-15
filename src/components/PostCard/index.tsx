import { Container, Content, Title } from './styles'

interface PostCardProps {
  title: string
  summary: string
  url: string
  createdAt: string
}

export function PostCard({ title, summary, url, createdAt }: PostCardProps) {
  return (
    <Container to={url}>
      <Title>
        <h1>{title}</h1>
        <span>{createdAt}</span>
      </Title>
      <Content>
        <p>{summary}</p>
      </Content>
    </Container>
  )
}
