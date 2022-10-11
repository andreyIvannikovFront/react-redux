import PostItem from "../PostsItem"

const Posts = (props) => {
  return (
    props.posts.map((item) => <PostItem id={item.id} title={item.title} key={item.id} />)
  )
}

export default Posts