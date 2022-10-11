import './index.scss'

const PostItem = (props) => {
  return (
    <li className="item">
      <p>{props.title}</p>
      <p>{props.id}</p>
    </li>
  )
}

export default PostItem