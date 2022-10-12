// import { Link } from 'react-router-dom'
import HeroItem from '../../components/HeroItem'
import { connect } from 'react-redux'
import Loading from '../../components/Loading'
import { useEffect } from 'react'
import { fetchUserById } from '../../slicers/heroes'
import './index.scss'


const Home = ({ loading, fetchUserById, heroes }) => {
  useEffect(() => {
    fetchUserById()
  }, [])



  return (
    <>
      {
        loading && <Loading />
      }
      {
        !loading && <div className='home'>
          <h1>Home</h1>
          <ul className='heroes'>
            {
              heroes.map((item) =>
                <li>
                  <HeroItem
                    key={item.id}
                    style={{ border: '2px solid red' }}
                    className='heroes__item'
                    {...item}
                  />
                </li>
              )
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

const mapStateToProps = ({ heroesSlice }) => {
  return {
    heroes: heroesSlice?.posts,
    loading: heroesSlice?.loading
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home) 