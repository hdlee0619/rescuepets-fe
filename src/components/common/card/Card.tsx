import { css } from 'styled-components'
import { ConvertAbandonment } from '@models/ConvertAbandonment.ts'
import Stack from '@components/elements/Stack.tsx'
import ImageInfo from '@components/common/card/ImageInfo.tsx'
import TextInfo from '@components/common/card/TextInfo.tsx'

type CardProps = {
  item: ConvertAbandonment
  imgAlt: string
}

export default function Card({ item, imgAlt }: CardProps) {
  return (
    <Stack $direction="column" $sx={CardStyle}>
      <ImageInfo
        src={item.publicAbandonment.popfile}
        status={item.kind.species}
        imgAlt={imgAlt}
      />
      <TextInfo {...{ item }} />
    </Stack>
  )
}

const CardStyle = css`
  border: 1px solid ${({ theme }) => theme.color.line.border};
  border-radius: 8px;
  width: 142px;
  min-height: 260px;
  cursor: pointer;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.screen.md}) {
    width: 164px;
    min-height: 276px;
  }
`
