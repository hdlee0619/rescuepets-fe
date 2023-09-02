import { css, styled } from 'styled-components'
import Chip from '@components/common/card/Chip.tsx'

type ImageInfoTypes = {
  src: string
  status: string
  imgAlt: string
}

export default function ImageInfo({ src, status, imgAlt }: ImageInfoTypes) {
  return (
    <Background $src={src}>
      <ImageStyle src={src} alt={imgAlt} />
      <Chip $color={({ theme }) => theme.color.status.main} $sx={ChipStyle}>
        {status}
      </Chip>
    </Background>
  )
}

const Background = styled.div<{ $src: string }>`
  position: relative;
  height: 124px;
  background: linear-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.4)
    ),
    url(${({ $src }) => $src});
  background-size: cover;
  @media (min-width: ${({ theme }) => theme.screen.md}) {
    height: 140px;
  }
`

const ImageStyle = styled.img`
  width: 100%;
  height: 124px;
  object-fit: contain;

  @media (min-width: ${({ theme }) => theme.screen.md}) {
    height: 140px;
  }
`

const ChipStyle = css`
  position: absolute;
  top: 8px;
  left: 8px;
`
