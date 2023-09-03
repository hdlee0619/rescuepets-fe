import useFetchAbandonment from '@hooks/abandonment/useFetchAbandonment.tsx'
import CardTable from '@components/common/card/CardTable.tsx'
import DogLoading from '@components/common/loading/DogLoading.tsx'

export default function Main() {
  const { abandonmentArray } = useFetchAbandonment([])

  if (abandonmentArray.length === 0) {
    return <DogLoading />
  }
  return <CardTable dataArray={abandonmentArray} />
}
