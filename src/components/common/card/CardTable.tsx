import { css } from 'styled-components'
import { ConvertAbandonment } from '@models/ConvertAbandonment.ts'
import Container from '@components/elements/Container.tsx'
import Card from '@components/common/card/Card.tsx'
import Grid from '@components/elements/Grid.tsx'

type CardTable = {
  dataArray: ConvertAbandonment[]
}

export default function CardTable({ dataArray }: CardTable) {
  return (
    <Container>
      <Grid $containerSx={GridContainerStyle}>
        {dataArray.map(item => {
          return (
            <Card
              key={item.publicAbandonment.desertionNo}
              imgAlt={item.imgAlt}
              item={item}
            />
          )
        })}
      </Grid>
    </Container>
  )
}

const GridContainerStyle = css`
  place-items: center;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: ${({ theme }) => theme.screen.md}) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: ${({ theme }) => theme.screen.lg}) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (min-width: ${({ theme }) => theme.screen.xl}) {
    grid-template-columns: repeat(6, 1fr);
  }
`
