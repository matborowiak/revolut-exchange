import logo from '../assets/logo_revolut.png'
import './Header.scss'

const Header = () => (
  <header className="Header">
    <img className="Header__logo" alt="Logo Revolut" src={logo} />
  </header>
)

export default Header