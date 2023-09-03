import useFetchAbandonment from '@hooks/abandonment/useFetchAbandonment.tsx'
import CardTable from '@components/common/card/CardTable.tsx'

export default function Main() {
  const { abandonmentArray } = useFetchAbandonment([])

  return <CardTable dataArray={abandonmentArray} />
}
