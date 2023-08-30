// React Library stuff
import useAbandonment from '@hooks/abandonment/useAbandonment.tsx'

// graphQL stuff

// type stuff

// react components stuff
import CardTable from '@components/common/card/CardTable.tsx'

// etc stuff

export default function Main() {
  const { abandonmentArray } = useAbandonment([])

  return <CardTable array={abandonmentArray} />
}
