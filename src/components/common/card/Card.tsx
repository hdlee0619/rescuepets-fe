// React & Library stuff

// graphQL stuff

// type stuff
import { abandonmentResponseTypes } from '@_types/abandonment.ts'

// react component stuff

// etc stuff

type CardProps = {
  item: abandonmentResponseTypes
}

export default function Card({ item }: CardProps) {
  return <div>{item.kindCd}</div>
}
