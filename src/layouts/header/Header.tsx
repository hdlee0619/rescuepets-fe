import { Link, NavLink, Outlet } from 'react-router-dom'
import { css, styled } from 'styled-components'
import Container from '@components/elements/Container.tsx'
import Stack from '@components/elements/Stack.tsx'
import Divider from '@components/elements/Divider.tsx'
import { ReactComponent as LaptopLogoSvg } from '@assets/logo/laptop_logo.svg'
import { ReactComponent as MobileLogoSvg } from '@assets/logo/mobile_logo.svg'
import { ReactComponent as Hamburger } from '@assets/svgicons/hamburger.svg'
import { ReactComponent as HomeIcon } from '@assets/svgicons/home.svg'
import { ReactComponent as PetworkIcon } from '@assets/svgicons/petwork.svg'
import { ReactComponent as ChatIcon } from '@assets/svgicons/chat.svg'
import { ReactComponent as ProfileIcon } from '@assets/svgicons/profile.svg'

export default function Header() {
  return (
    <>
      <Container $sx={HeaderContainerStyle}>
        <Link to="/">
          <LaptopLogo />
          <MobileLogo />
        </Link>
        <LaptopNavbar />
        <HamburgerIcon />
      </Container>
      <Divider $density="2px" />
      <Outlet />
    </>
  )
}

const LaptopNavbar = () => {
  return (
    <Stack $sx={NavbarStyle}>
      <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
        <HomeIcon />
        <span>Home</span>
      </NavLink>
      <NavLink
        to="/petwork"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        <PetworkIcon />
        <span>Petwork</span>
      </NavLink>
      <NavLink
        to="/chat"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        <ChatIcon />
        <span>Chat</span>
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        <ProfileIcon />
        <span>Profile</span>
      </NavLink>
    </Stack>
  )
}

const HeaderContainerStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0 8px 0;
`

const LaptopLogo = styled(LaptopLogoSvg)`
  @media (max-width: ${({ theme }) => theme.screen.md}) {
    display: none;
  }
`

const MobileLogo = styled(MobileLogoSvg)`
  padding: 4px 0 4px 16px;
  width: 38px;
  height: 44px;
  @media (min-width: ${({ theme }) => theme.screen.md}) {
    display: none;
  }
`

const HamburgerIcon = styled(Hamburger)`
  padding: 4px 16px 4px 0;
  width: 38px;
  height: 44px;
  cursor: pointer;
  @media (min-width: ${({ theme }) => theme.screen.md}) {
    display: none;
  }
`

const NavbarStyle = css`
  gap: 24px;
  padding-right: 24px;
  a {
    display: flex;
    align-items: center;
    span {
      padding-top: 4px;
      font-size: 18px;
      font-weight: bold;
      line-height: 26px;
    }
  }
  .active {
    color: ${({ theme }) => theme.color.primary.main};
    path:not(.background) {
      fill: ${({ theme }) => theme.color.primary.main};
    }
    circle {
      fill: ${({ theme }) => theme.color.primary.main};
    }
  }

  @media (max-width: ${({ theme }) => theme.screen.md}) {
    display: none;
  }
`
