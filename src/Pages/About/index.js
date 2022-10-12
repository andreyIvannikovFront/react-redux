import './index.scss'
import { Link } from 'react-router-dom'
// import Counter from '../../components/Counter/index'


const About = (props) => {
  const test = {
    firstName: 'andrey',
    secondName: 'ivannikov',
    age: 28
  }
  const Func = function () {
    return {
      a: 2,
      b: 3
    }
  }
  const func1 = new Func()
  const func2 = new Func()
  console.log(func1);

  const arr = [12, 2, 4, 5, 6, 7, 8, 9]
  arr[2] = 'c';
  arr[1] = 'b';
  arr[0] = 'a';
  arr.age = 213


  const itr = (obj) => {
    for (let i in obj) {
      console.log(obj[i]);
    }
  }

  itr(arr)



  return (
    <>
      <div>
        <h1>About</h1>
        <Link to='/home'>Back</Link>
      </div>
    </>
  )
}

export default About