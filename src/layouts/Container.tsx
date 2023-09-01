import { ReactNode } from 'react'
import { CSSProp, styled } from 'styled-components'

type ContainerProps = {
  children: ReactNode
  $sx?: CSSProp
}
Container.defaultProps = {
  $sx: undefined,
}

export default function Container({ children, $sx }: ContainerProps) {
  return <ContainerDiv $sx={$sx}>{children}</ContainerDiv>
}

const ContainerDiv = styled.div<{ $sx?: CSSProp }>`
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
  ${({ $sx }) => $sx && $sx}}
`
