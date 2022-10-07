import PostItem from "../PostsItem"

const Posts = (props) => {
  console.log(props, 'props');
  return (
    props.heroes && props.heroes.length ? props.heroes.map((item) => <PostItem {...item} />) : null
  )
}

export default Posts