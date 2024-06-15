import styled from 'styled-components'

export const PostPageContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const PostContainer = styled.article`
  margin-top: -90px;
  display: flex;
  flex-direction: column;
  max-width: 900px;
  align-items: center;
  border-radius: 10px;
`

export const PostHeader = styled.header`
  width: 100%;
  background-color: ${(props) => props.theme['base-profile']};
  padding: 2.5rem;
  border-radius: 10px;
`

export const HeaderNavLinks = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.75rem;

    color: ${(props) => props.theme.blue};
    font-weight: bold;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
`

export const HeaderTitle = styled.div`
  h2 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-title']};
  }
`

export const PostContent = styled.main`
  padding: 2.5rem;
  font-size: 1rem;
  color: ${(props) => props.theme['base-text']};

  p {
    margin-bottom: 1rem;
  }

  code {
    padding: 1rem;
    display: block;
    margin-bottom: 1rem;
    background-color: ${(props) => props.theme['base-post']};
  }
`

export const PostDetails = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 2rem;
`

export const PostDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  color: ${(props) => props.theme['base-subtitle']};

  :first-child {
    color: ${(props) => props.theme['base-label']};
  }
`
