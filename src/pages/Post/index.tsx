import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  PostContainer,
  PostContent,
  PostDetail,
  PostDetails,
  PostHeader,
  PostPageContainer,
  HeaderNavLinks,
} from './styles'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { HeaderTitle } from './styles'

export function Post() {
  return (
    <PostPageContainer>
      <PostContainer>
        <PostHeader>
          <HeaderNavLinks>
            <a href="/">
              <FontAwesomeIcon size="sm" icon={faChevronLeft} />
              Voltar
            </a>
            <a href="https://github.com">
              Ver no Github{' '}
              <FontAwesomeIcon size="sm" icon={faArrowUpRightFromSquare} />
            </a>
          </HeaderNavLinks>
          <HeaderTitle>
            <h2>JavaScript data types and data structures</h2>
          </HeaderTitle>
          <PostDetails>
            <PostDetail>
              <FontAwesomeIcon icon={faGithub} /> nickolasaperes
            </PostDetail>
            <PostDetail>
              <FontAwesomeIcon icon={faCalendarDay} />
              Há 1 dia
            </PostDetail>
            <PostDetail>
              <FontAwesomeIcon icon={faComment} />5 comentários
            </PostDetail>
          </PostDetails>
        </PostHeader>
        <PostContent>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn. Dynamic typing JavaScript is a loosely typed and dynamic
            language. Variables in JavaScript are not directly associated with
            any particular value type, and any variable can be assigned (and
            re-assigned) values of all types:
          </p>
        </PostContent>
      </PostContainer>
    </PostPageContainer>
  )
}
