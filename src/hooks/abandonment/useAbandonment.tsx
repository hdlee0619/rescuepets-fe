import { useEffect, useState } from 'react'

import { abandonmentResponseTypes } from '@_types/abandonmentType.ts'
import { ConvertAbandonment } from '@models/ConvertAbandonment.ts'

export default function useAbandonment(initialState: never[]) {
  const [abandonmentArray, setAbandonmentArray] =
    useState<ConvertAbandonment[]>(initialState)

  useEffect(() => {
    fetchPublicData().then(data => setAbandonmentArray(data))
  }, [])

  return { abandonmentArray }
}

const fetchPublicData = async () => {
  const ABANDONMENT_PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY

  const URL: string =
    'http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic'

  const { response } = await fetch(
    `${URL}?pageNo=2&numOfRows=100&_type=json&serviceKey=${ABANDONMENT_PUBLIC_KEY}`,
    { method: 'GET' }
  )
    .then(response => response.json())
    .catch(error => new Error(error))

  return response.body.items.item.map(
    (item: abandonmentResponseTypes) => new ConvertAbandonment(item)
  )
}
