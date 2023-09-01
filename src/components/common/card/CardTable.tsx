import { ConvertAbandonment } from '@models/ConvertAbandonment.ts'
import Container from '@layouts/Container.tsx'
import Card from '@components/common/card/Card.tsx'

type CardTable = {
  cardInfo: ConvertAbandonment[]
}

export default function CardTable({ cardInfo }: CardTable) {
  return (
    <Container>
      {cardInfo.map(item => {
        return <Card key={item.remoteAbandonment.desertionNo} item={item} />
      })}
    </Container>
  )
}
