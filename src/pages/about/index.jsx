import React from 'react'
import { useDispatch } from 'react-redux'
import { laylo } from '../../redux/features/counterSlice'
import { decrement } from '../../redux/features/counterSlice'
import { reset } from '../../redux/features/counterSlice'


// useDispatch - set

const About = () => {
  const dispatch = useDispatch()
  return (
    <div>
        <h2>About</h2>
        <button onClick={() => dispatch(laylo())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(reset())} >reset</button>
    </div>
  )
}

export default About