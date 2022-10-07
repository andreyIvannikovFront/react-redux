import './index.scss'
// import { Link } from 'react-router-dom'
import PostItem from '../../components/PostsItem'
import { connect } from 'react-redux'
import Loading from '../../components/Loading'
import { useEffect } from 'react'
import { fetchUserById } from '../../components/Counter/counterSlice'


const Home = (props) => {
  useEffect(() => {
    props.fetchUserById()
  }, [])
  return (
    <>
      {
        props.loading && <Loading />
      }
      {
        !props.loading && <div className='home'>
          <h1>Home</h1>
          <ul className='heroes'>
            {
              props.heroes.map((item) => <PostItem key={item.id} className='heroes__item' {...item} />)
            }
          </ul>
        </div>
      }
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserById: () => dispatch(fetchUserById()),
  }
}

const mapStateToProps = ({ counterSlice }) => {
  return {
    heroes: counterSlice.posts,
    loading: counterSlice.loadingStatus
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home) 