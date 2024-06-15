import styled from 'styled-components'

export const UserCardContainer = styled.div`
  margin-top: -90px;
  padding: 2.5rem;
  display: flex;
  gap: 2.5rem;
  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;

  h1 {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.5rem;
  }
`

export const ProfilePictureContainer = styled.div`
  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }
`

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`

export const ProfileDescription = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`

export const ProfileLink = styled.a`
  position: absolute;
  right: 5px;
  top: 0px;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.75rem;

  color: ${(props) => props.theme.blue};
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

export const Footer = styled.footer`
  display: flex;
  gap: 2.5rem;
`

export const FooterItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  color: ${(props) => props.theme['base-subtitle']};

  :first-child {
    color: ${(props) => props.theme['base-label']};
  }
`
