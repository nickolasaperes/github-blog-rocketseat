import styled from 'styled-components'

export const Container = styled.div`
  min-width: 416px;
  max-height: 280px;
  flex: 1;

  padding: 2.5rem;
  background-color: ${(props) => props.theme['base-post']};
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  cursor: pointer;
  border: 2px solid transparent;

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }
`

export const Title = styled.div`
  h1 {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.5rem;
    max-width: 80%;
    text-overflow: ellipsis;
  }
  span {
    color: ${(props) => props.theme['base-span']};
    font-size: 0.875rem;
    min-width: fit-content;
    margin-top: 15px;
  }

  display: flex;
  align-items: start;
  justify-content: space-between;
`

export const Content = styled.div`
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
`
