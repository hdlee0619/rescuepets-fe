// React & Library stuff

// graphQL stuff

// type stuff
import { abandonmentResponseTypes } from '@_types/abandonment.ts'

// react component stuff
import Card from '@components/common/card/Card.tsx'
import Container from '@layouts/Container.tsx'

// etc stuff

type CardTable = {
  array: abandonmentResponseTypes[]
}

export default function CardTable({ array }: CardTable) {
  return (
    <Container>
      {array.map(item => {
        return <Card key={item.desertionNo} item={item} />
      })}
    </Container>
  )
}
