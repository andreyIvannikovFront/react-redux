import { useNavigate } from 'react-router-dom'
import './index.scss'

const PostItem = (props) => {
  const navigate = useNavigate()

  const onClickHero = () => {
    console.log('test');
    navigate(`/hero/${props.id}`)
  }

  return (
    <div className="card" onClick={onClickHero}>
      <div className='card__header'>
        <img src={props.img} alt={props.name} />
      </div>
      <div className='card__body'>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default PostItem
