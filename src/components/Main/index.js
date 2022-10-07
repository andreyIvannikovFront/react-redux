import { connect } from 'react-redux'
import './index.scss'

const Main = (props) => {
  return (
    <>
      <main className='main'>
        {props.children}
      </main>
    </>
  )
}

const mapStateToProps = ({ counterSlice }) => {
  return {
    heroes: counterSlice.posts
  }
}

export default connect(mapStateToProps)(Main) 