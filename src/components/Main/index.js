import { connect } from 'react-redux'
import Posts from '../Posts'
import './index.scss'

const Main = (props) => {
  return (
    <>
      <main className='main'>
        <ul>
          {props.posts && <Posts posts={props.posts} />}
        </ul>
        {props.children}
      </main>
    </>
  )
}

const mapStateToProps = ({ counterSlice }) => {
  return {
    posts: counterSlice.posts
  }
}

export default connect(mapStateToProps)(Main) 