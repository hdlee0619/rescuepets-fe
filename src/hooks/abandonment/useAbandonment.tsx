import { useEffect, useState } from 'react'

import { abandonmentResponseTypes } from '@_types/abandonment.ts'

const ABANDONMENT_PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY

export default function useAbandonment(initialState: never[]) {
  const [abandonmentArray, setAbandonmentArray] =
    useState<abandonmentResponseTypes[]>(initialState)

  useEffect(() => {
    const URL: string =
      'http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic'
    fetch(
      `${URL}?pageNo=1&numOfRows=10&_type=json&serviceKey=${ABANDONMENT_PUBLIC_KEY}`,
      {
        method: 'GET',
      }
    )
      .then(res => res.json())
      .then(res => {
        setAbandonmentArray([...res.response.body.items.item])
      })
      .catch(error => {
        throw new Error(error)
      })
  }, [abandonmentArray])

  return { abandonmentArray }
}
