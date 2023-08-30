// React Library stuff
import { ReactNode } from 'react'
import { styled } from 'styled-components'

// graphQL stuff

// type stuff
type ContainerProps = {
  children: ReactNode
}

// react component stuff

// etc stuff

export default function Container({ children }: ContainerProps) {
  return <ContainerDiv>{children}</ContainerDiv>
}

const ContainerDiv = styled.div`
  margin: 0 auto 0 auto;
  max-width: 1280px;
  @media ${({ theme }) => theme.breakpoint.laptop} {
    max-width: 920px;
  }
  @media ${({ theme }) => theme.breakpoint.tablet} {
    max-width: 750px;
  }
  @media ${({ theme }) => theme.breakpoint.mobileL} {
    max-width: 375px;
    padding: 0 16px 0 16px;
  }
`
