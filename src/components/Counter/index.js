import './index.scss'
import { connect } from 'react-redux'
import { rnd, increment, decrement, fetchUserById } from './counterSlice';

const Counter = ({ increment, rnd, decrement, counter = 0, fetchUserById }) => {
  return (
    <div className='counter'>
      <button className='btn' onClick={increment}>inc {counter}</button>
      <button className='btn' onClick={decrement}>dec</button>
      <button className='btn' onClick={rnd}>rnd</button>
      <button className='btn' onClick={fetchUserById}>rnd</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    rnd: () => dispatch(rnd()),
    decrement: () => dispatch(decrement()),
    fetchUserById: () => dispatch(fetchUserById()),
  }
}
const mapStateToProps = ({ counterSlice }) => {
  return {
    counter: counterSlice.counter
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)