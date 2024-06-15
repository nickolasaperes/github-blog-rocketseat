import styled from 'styled-components'

export const PostListContainer = styled.div`
  padding: 2.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

export const PostListHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const SearchInput = styled.input`
  height: 50px;
  background-color: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};
  border: 1px solid ${(props) => props.theme['base-border']};
  border-radius: 6px;
  padding: 1rem;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`

export const PostListHeaderTitle = styled.div`
  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.125rem;
  }
  span {
    color: ${(props) => props.theme['base-span']};
    font-size: 0.875rem;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const PostListContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
`
