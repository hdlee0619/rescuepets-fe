import dayjs from 'dayjs'
import { abandonmentResponseTypes } from '@_types/abandonmentType.ts'

export class ConvertAbandonment {
  readonly publicAbandonment: abandonmentResponseTypes

  constructor(publicAbandonment: abandonmentResponseTypes) {
    this.publicAbandonment = publicAbandonment
  }

  private changeSpeciesWord = (): string => {
    const species: string = this.publicAbandonment.kindCd.split(']')[0].slice(1)
    if (species === '개') {
      return '강아지'
    }
    return species
  }

  get kind(): { species: string; type: string } {
    const species = this.changeSpeciesWord()
    const type = this.publicAbandonment.kindCd.split(']')[1]
    return { species, type }
  }

  get summaryData(): string {
    let neutralization
    if (this.publicAbandonment.neuterYn === 'Y') {
      neutralization = '중성화O'
    } else if (this.publicAbandonment.neuterYn === 'N') {
      neutralization = '중성화X'
    } else if (this.publicAbandonment.neuterYn === 'U') {
      neutralization = '중성화?'
    }
    const { weight } = this.publicAbandonment
    const { colorCd } = this.publicAbandonment

    return `${neutralization}/${weight}/${colorCd}`
  }

  get convertDate(): {
    happenDate: string
    startDate: string
    endDate: string
  } {
    const happenDate = dayjs(this.publicAbandonment.happenDt).format('YY.MM.DD')
    const startDate = dayjs(this.publicAbandonment.noticeSdt).format('YY.MM.DD')
    const endDate = dayjs(this.publicAbandonment.noticeEdt).format('YY.MM.DD')

    return { happenDate, startDate, endDate }
  }
}
