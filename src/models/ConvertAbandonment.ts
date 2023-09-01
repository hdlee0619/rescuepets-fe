import dayjs from 'dayjs'
import { abandonmentResponseTypes } from '@_types/abandonmentType.ts'

export class ConvertAbandonment {
  readonly remoteAbandonment: abandonmentResponseTypes

  constructor(remoteAbandonment: abandonmentResponseTypes) {
    this.remoteAbandonment = remoteAbandonment
  }

  private changeSpeciesWord = (): string => {
    const species: string = this.remoteAbandonment.kindCd.split(']')[0].slice(1)
    if (species === '개') {
      return '강아지'
    }
    return species
  }

  get kind(): { species: string; type: string } {
    const species = this.changeSpeciesWord()
    const type = this.remoteAbandonment.kindCd.split(']')[1]
    return { species, type }
  }

  get summaryData(): string {
    let neutralization
    if (this.remoteAbandonment.neuterYn === 'Y') {
      neutralization = '중성화O'
    } else if (this.remoteAbandonment.neuterYn === 'N') {
      neutralization = '중성화X'
    } else if (this.remoteAbandonment.neuterYn === 'U') {
      neutralization = '중성화?'
    }
    const { weight } = this.remoteAbandonment
    const { colorCd } = this.remoteAbandonment

    return `${neutralization}/${weight}/${colorCd}`
  }

  get convertDate(): {
    happenDate: string
    startDate: string
    endDate: string
  } {
    const happenDate = dayjs(this.remoteAbandonment.happenDt).format('YY.MM.DD')
    const startDate = dayjs(this.remoteAbandonment.noticeSdt).format('YY.MM.DD')
    const endDate = dayjs(this.remoteAbandonment.noticeEdt).format('YY.MM.DD')

    return { happenDate, startDate, endDate }
  }
}
