import { Link, Outlet } from 'react-router-dom'
import Container from '@components/elements/Container.tsx'

export default function Header() {
  return (
    <>
      <Container>
        <div>hi nav bar</div>
        <Link to="/hi">link</Link>
      </Container>
      <Outlet />
    </>
  )
}
