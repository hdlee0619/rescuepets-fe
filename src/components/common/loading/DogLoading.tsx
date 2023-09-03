import loadingAnimation from '@assets/lottie/dog_loading.json'
import Lottie from 'react-lottie'
import { styled } from 'styled-components'

export default function DogLoading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  return (
    <LottieStyle>
      <Lottie options={defaultOptions} />
    </LottieStyle>
  )
}

const LottieStyle = styled.div`
  margin: auto;
  width: 400px;
  height: 400px;
`
