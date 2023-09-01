import { ReactNode } from 'react'
import { CSSProp, styled } from 'styled-components'

type GridProps = {
  children: ReactNode
  $containerSx: CSSProp
  $itemSx?: CSSProp
}
Grid.defaultProps = {
  $itemSx: undefined,
}

export default function Grid({ children, $itemSx, $containerSx }: GridProps) {
  return <GridDiv {...{ $itemSx, $containerSx }}>{children}</GridDiv>
}

const GridDiv = styled.div<{ $itemSx: CSSProp; $containerSx: CSSProp }>`
  display: grid;
  gap: 8px;
  grid-gap: 8px;
  ${({ $containerSx }) => $containerSx && $containerSx}

  .itemSx {
    ${({ $itemSx }) => $itemSx && $itemSx}
  }
`
