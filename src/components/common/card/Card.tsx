import { css, styled } from 'styled-components'
import { ConvertAbandonment } from '@models/ConvertAbandonment.ts'
import Stack from '@components/elements/Stack.tsx'

type CardProps = {
  item: ConvertAbandonment
  imgAlt: string
}

export default function Card({ item, imgAlt }: CardProps) {
  return (
    <Stack $direction="column" $sx={CardStyle}>
      <Image
        src={item.publicAbandonment.popfile}
        className="image"
        alt={imgAlt}
      />
      <Stack $direction="column">
        <h1>{item.kind.species}</h1>
        <span>{item.summaryData}</span>
        <span>{item.convertDate.startDate}</span>
      </Stack>
    </Stack>
  )
}

const CardStyle = css`
  border: 1px solid ${({ theme }) => theme.color.line.border};
  border-radius: 8px;
  width: 134px;
  height: 224px;

  @media (min-width: ${({ theme }) => theme.screen.md}) {
    width: 164px;
    height: 240px;
  }
  @media (min-width: ${({ theme }) => theme.screen.xl}) {
    width: 180px;
    height: 256px;
  }
`

const Image = styled.img`
  width: 100%;
  height: 124px;
  object-fit: contain;

  @media (min-width: ${({ theme }) => theme.screen.md}) {
    height: 140px;
  }
  @media (min-width: ${({ theme }) => theme.screen.xl}) {
    height: 156px;
  }
`
