import { styled } from 'styled-components'

type DividerProps = {
  $density: string
}

export default function Divider({ $density }: DividerProps) {
  return <DividerStyle {...{ $density }} />
}

const DividerStyle = styled.div<{ $density: string }>`
  width: 100%;
  border-bottom: ${({ $density }) => $density && $density} solid
    ${({ theme }) => theme.color.line.main};
`
