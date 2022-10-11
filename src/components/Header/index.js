import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { logo } from '../../images/index'
import './index.scss'

const Header = () => {
  const links = [
    { label: 'Home', url: '/' },
    { label: 'Heroes', url: '/heroes' },
  ]

  return (
    <header className='header container'>
      <div className='logo'>
        <img src={logo} alt="Logo" />
      </div>
      <div className='counter'>
        <nav className='menu'>
          <ul className='menu__list'>
            {links.map((link) =>
              <li className='menu__item'>
                <Link to={link.url}>
                  {link.label}
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default connect()(Header) 