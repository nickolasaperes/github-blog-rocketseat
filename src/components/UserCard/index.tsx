import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  UserCardContainer,
  ProfilePictureContainer,
  Footer,
  ProfileContent,
  ProfileLink,
  FooterItem,
  ProfileDescription,
} from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { memo } from 'react'

interface UserCardProps {
  name: string
  username: string
  description: string
  profilePictureURL: string
  organization?: string
  followers: number
  profileURL: string
}

function UserCardComponent({
  name,
  username,
  description,
  profileURL,
  profilePictureURL,
  organization,
  followers,
}: UserCardProps) {
  return (
    <UserCardContainer>
      <ProfilePictureContainer>
        <img src={profilePictureURL} alt="" />
      </ProfilePictureContainer>
      <ProfileContent>
        <ProfileLink href={profileURL} target="_blank" rel="noopener">
          Github <FontAwesomeIcon size="sm" icon={faArrowUpRightFromSquare} />
        </ProfileLink>
        <div>
          <h1>{name}</h1>
          <ProfileDescription>{description}</ProfileDescription>
        </div>
        <Footer>
          <FooterItem>
            <FontAwesomeIcon icon={faGithub} /> {username}
          </FooterItem>
          {organization && (
            <FooterItem>
              <FontAwesomeIcon icon={faBuilding} />
              {organization}
            </FooterItem>
          )}
          <FooterItem>
            <FontAwesomeIcon icon={faUserGroup} />
            {followers === 1 ? `1 seguidor` : `${followers} seguidores`}
          </FooterItem>
        </Footer>
      </ProfileContent>
    </UserCardContainer>
  )
}

export const UserCard = memo(UserCardComponent)
