import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  PostContainer,
  PostContent,
  PostDetail,
  PostDetails,
  PostHeader,
  PostPageContainer,
  HeaderNavLinks,
  HeaderTitle,
} from './styles'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { NavLink, useParams } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../lib/api'
import { dateFormatDistanceToNow } from '../../utils/formatters'
import Markdown from 'react-markdown'
import { BlogContext } from '../../context/BlogContext'
import { useContextSelector } from 'use-context-selector'

interface PostType {
  id: number
  title: string
  body: string
  usernameAuthor: string
  createdAt: string
  comments: number
  externalUrl: string
}

export function Post() {
  const { postId } = useParams()
  const [post, setPost] = useState<PostType>({} as PostType)

  const repo = useContextSelector(BlogContext, (context) => context.repo)

  const fetchPost = useCallback(async () => {
    const response = await api.get(`/repos/${repo}/issues/${postId}`)

    const data = response.data

    const postData = {
      id: data.number,
      title: data.title,
      body: data.body,
      usernameAuthor: data.user.login,
      createdAt: dateFormatDistanceToNow(new Date(data.created_at)),
      comments: data.comments,
      externalUrl: data.html_url,
    }

    setPost(postData)
  }, [postId, repo])

  useEffect(() => {
    fetchPost()
  }, [fetchPost])

  return (
    <PostPageContainer>
      <PostContainer>
        <PostHeader>
          <HeaderNavLinks>
            <NavLink to="/">
              <FontAwesomeIcon size="sm" icon={faChevronLeft} />
              Voltar
            </NavLink>
            <a
              href={post.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver no Github
              <FontAwesomeIcon size="sm" icon={faArrowUpRightFromSquare} />
            </a>
          </HeaderNavLinks>
          <HeaderTitle>
            <h2>{post.title}</h2>
          </HeaderTitle>
          <PostDetails>
            <PostDetail>
              <FontAwesomeIcon icon={faGithub} /> {post.usernameAuthor}
            </PostDetail>
            <PostDetail>
              <FontAwesomeIcon icon={faCalendarDay} />
              {post.createdAt}
            </PostDetail>
            <PostDetail>
              <FontAwesomeIcon icon={faComment} />
              {post.comments === 1
                ? '1 comentário'
                : `${post.comments} comentários`}
            </PostDetail>
          </PostDetails>
        </PostHeader>
        <PostContent>
          <Markdown>{post.body}</Markdown>
        </PostContent>
      </PostContainer>
    </PostPageContainer>
  )
}
