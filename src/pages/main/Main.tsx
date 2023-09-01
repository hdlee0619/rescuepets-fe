import useAbandonment from '@hooks/abandonment/useAbandonment.tsx'
import CardTable from '@components/common/card/CardTable.tsx'

export default function Main() {
  const { abandonmentArray } = useAbandonment([])

  return <CardTable cardInfo={abandonmentArray} />
}
