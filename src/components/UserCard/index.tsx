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

export function UserCard() {
  return (
    <UserCardContainer>
      <ProfilePictureContainer>
        <img src="https://github.com/nickolasaperes.png" alt="" />
      </ProfilePictureContainer>
      <ProfileContent>
        <ProfileLink href="https://github.com/nickolasaperes">
          Github <FontAwesomeIcon size="sm" icon={faArrowUpRightFromSquare} />
        </ProfileLink>
        <div>
          <h1>Nickolas A Peres</h1>
          <ProfileDescription>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenpm i --save
            @fortawesome/free-brands-svg-iconsnean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </ProfileDescription>
        </div>
        <Footer>
          <FooterItem>
            <FontAwesomeIcon icon={faGithub} /> nickolasaperes
          </FooterItem>
          <FooterItem>
            <FontAwesomeIcon icon={faBuilding} />
            Rocketseat
          </FooterItem>
          <FooterItem>
            <FontAwesomeIcon icon={faUserGroup} />
            32 seguidores
          </FooterItem>
        </Footer>
      </ProfileContent>
    </UserCardContainer>
  )
}
