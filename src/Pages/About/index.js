import './index.scss'
import { Link } from 'react-router-dom'
// import Counter from '../../components/Counter/index'


const About = (props) => {
  return (
    <>
      <div>
        <h1>About</h1>
        <Link to='/home'>Back</Link>
      </div>
    </>
  )
}

export default About