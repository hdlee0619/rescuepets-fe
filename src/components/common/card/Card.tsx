import { css, styled } from 'styled-components'
import { ConvertAbandonment } from '@models/ConvertAbandonment.ts'
import Stack from '@components/elements/Stack.tsx'

type CardProps = {
  item: ConvertAbandonment
}

export default function Card({ item }: CardProps) {
  return (
    <Stack $direction="column" $sx={CardStyle}>
      <Image src={item.remoteAbandonment.popfile} />
      <Stack $direction="column">
        <h1>{item.kind.species}</h1>
        <span>{item.summaryData}</span>
        <span>{item.convertDate.startDate}</span>
      </Stack>
    </Stack>
  )
}

const CardStyle = css`
  width: 160px;
  height: 226px;
  border: 1px solid ${({ theme }) => theme.color.line.border};
  border-radius: 8px;
`
const Image = styled.img`
  width: 100%;
  height: 120px;
  object-fit: contain;
`
