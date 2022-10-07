import './index.scss'

const PostItem = (props) => {
  return (
    <li className="item">
      <img src={props.img} alt={props.name} />
      <p>{props.name}</p>
      <p>{props.description}</p>
    </li>
  )
}

export default PostItem