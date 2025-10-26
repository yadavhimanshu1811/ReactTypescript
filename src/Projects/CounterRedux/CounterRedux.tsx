import React from 'react'
import Button from '../../Components/Button'
import { increment, decrement } from '../../redux/counter/counterSlice'
import { useDispatch, useSelector } from 'react-redux'

const CounterRedux = () => {
    const dispatch = useDispatch();
  // const count = 1
  const count = useSelector ((state: any) => state.counter.value)
    return (<div>
      Currently count is: {count}
      <Button text="+" onButtonClick={()=>dispatch(increment())}/>
      <Button text="-" onButtonClick={()=>dispatch(decrement())}/>
    </div>)
}

export default CounterRedux;