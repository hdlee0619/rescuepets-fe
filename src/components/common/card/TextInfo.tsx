import { css } from 'styled-components'
import Stack from '@components/elements/Stack.tsx'
import { ConvertAbandonment } from '@models/ConvertAbandonment.ts'
import { ReactComponent as Location } from '@assets/svgicons/location.svg'
import { ReactComponent as Time } from '@assets/svgicons/time.svg'
import { ReactComponent as Info } from '@assets/svgicons/info.svg'
import { ReactComponent as Male } from '@assets/svgicons/male.svg'
import { ReactComponent as Female } from '@assets/svgicons/female.svg'

type TextInfoTypes = {
  item: ConvertAbandonment
}

// TODO: 반복 컴포넌트 정리
export default function TextInfo({ item }: TextInfoTypes) {
  return (
    <Stack $direction="column" $sx={TextInfoStyle}>
      <Stack $align="center">
        <h2>{item.kind.type}</h2>
        {/* TODO: 비교 로직 models/ConvertAbandonment.ts로 분리할 수 있는지 고려 */}
        {item.publicAbandonment.sexCd === 'M' ? <Male /> : <Female />}
      </Stack>
      <Stack>
        <Location />
        <span>{item.summaryLocation}</span>
      </Stack>
      <Stack>
        <Time />
        <span>{item.convertDate.startDate}</span>
      </Stack>
      <Stack>
        <Info />
        <span>{item.summaryData}</span>
      </Stack>
    </Stack>
  )
}

const TextInfoStyle = css`
  padding: 16px 8px 16px 8px;
  height: 100%;
  gap: 8px;

  h2 {
    padding-top: 2px;
    font-weight: bold;
    font-size: 14px;
    line-height: 22px;
    color: ${({ theme }) => theme.color.text.main};

    @media (min-width: ${({ theme }) => theme.screen.md}) {
      font-size: 16px;
    }
  }
  span {
    padding-top: 2px;
    font-size: 12px;
    line-height: 14px;
    color: ${({ theme }) => theme.color.text.alternative};
    @media (min-width: ${({ theme }) => theme.screen.md}) {
      font-size: 14px;
    }
  }
  svg {
    min-width: 16px;
  }
`
