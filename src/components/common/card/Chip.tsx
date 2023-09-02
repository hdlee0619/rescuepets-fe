import { CSSProp, styled } from 'styled-components'

type ChipProps = {
  children: string
  $color: CSSProp
  $sx?: CSSProp
}
Chip.defaultProps = {
  $sx: undefined,
}

export default function Chip({ children, $color, $sx }: ChipProps) {
  return <ChipDiv {...{ $color, $sx }}>{children}</ChipDiv>
}

const ChipDiv = styled.div<{ $color: CSSProp; $sx: CSSProp }>`
  width: fit-content;
  padding: 2px 4px 2px 4px;
  background: linear-gradient(
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.3)
  );
  border: 1px solid ${({ $color }) => $color && $color};
  border-radius: 8px;
  font-size: 10px;
  color: ${({ $color }) => $color && $color};
  white-space: nowrap;
  ${({ $sx }) => $sx && $sx}
`
