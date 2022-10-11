import { connect } from 'react-redux'

import { logo } from '../../images/index'
import './index.scss'

const Header = ({ counter }) => {
  return (
    <header className='header'>
      <div className='logo'>
        <img src={logo} alt="Logo" />
      </div>
      <div className='counter'>{counter}</div>
    </header>
  )
}
const mapStateToProps = (({ counterSlice }) => {
  return {
    counter: counterSlice.counter
  }
})
export default connect(mapStateToProps)(Header) 