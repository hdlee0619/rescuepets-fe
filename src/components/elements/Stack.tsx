import { ReactNode } from 'react'
import { styled, CSSProp } from 'styled-components'

type StackProps = {
  children: ReactNode
  $direction?: string
  $justify?: string
  $align?: string
  $sx?: CSSProp
}
Stack.defaultProps = {
  $direction: undefined,
  $justify: undefined,
  $align: undefined,
  $sx: undefined,
}

export default function Stack({
  children,
  $direction,
  $justify,
  $align,
  $sx,
}: StackProps) {
  return (
    <FlexDiv {...{ $direction, $justify, $align, $sx }}>{children}</FlexDiv>
  )
}

const FlexDiv = styled.div<{
  $direction?: string
  $justify?: string
  $align?: string
  $sx?: CSSProp
}>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  justify-content: ${({ $justify }) => $justify};
  align-items: ${({ $align }) => $align};
  ${({ $sx }) => $sx && $sx}
`
