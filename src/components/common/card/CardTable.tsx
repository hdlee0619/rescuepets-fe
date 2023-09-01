import { css } from 'styled-components'
import { ConvertAbandonment } from '@models/ConvertAbandonment.ts'
import Container from '@layouts/Container.tsx'
import Card from '@components/common/card/Card.tsx'
import Grid from '@components/elements/Grid.tsx'

type CardTable = {
  cardInfo: ConvertAbandonment[]
}

export default function CardTable({ cardInfo }: CardTable) {
  return (
    <Container>
      <Grid $containerSx={GridContainerStyle}>
        {cardInfo.map(item => {
          return (
            <Card
              key={item.publicAbandonment.desertionNo}
              item={item}
              imgAlt="유기 동물"
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
