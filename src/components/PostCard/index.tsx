import { Container, Content, Title } from './styles'

export function PostCard() {
  return (
    <Container>
      <Title>
        <h1>JavaScript data types and data structures</h1>
        <span>Há 1 dia</span>
      </Title>
      <Content>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn.
        </p>
      </Content>
    </Container>
  )
}
