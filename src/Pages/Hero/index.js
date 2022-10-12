import { useEffect } from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchHeroById } from "../../slicers/hero/index"
import './index.scss'

import HeroItem from '../../components/HeroItem'
import Loading from '../../components/Loading'
import Comics from '../../components/Comics'
import './index.scss'

const Hero = ({ fetchHero, hero, loading }) => {
  const { id } = useParams()


  useEffect(() => {
    fetchHero(id)
  }, [])

  const isShowComics = (hero.comics && hero.comics.items.length) && <Comics comics={hero.comics.items} />

  return (
    <>
      {
        loading ? <Loading /> :
          <div className="hero">
            <HeroItem {...hero} class="hero__card" style={{ alignSelf: 'flex-start', color: 'red' }} />
            {isShowComics}
          </div>
      }
    </>
  )
}

const mapStateToProps = ({ heroSlice }) => {
  return {
    hero: heroSlice.hero,
    loading: heroSlice.loading
  }
}
const mapStateToDispatch = (dispatch) => {
  return {
    fetchHero: (id) => dispatch(fetchHeroById(id))
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(Hero)