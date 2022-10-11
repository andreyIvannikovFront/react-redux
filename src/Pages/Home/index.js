import './index.scss'
import {Link} from 'react-router-dom'

const Home = (props) => {
  return(
    <>
      <div>
        <h1>Home</h1>
        <Link to='/'>About</Link>
      </div>
    </>
  )
}

export default Home