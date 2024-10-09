import { decrement } from '@/components/store/mainSlicer'
import ReactPage from '@/projects/reactproject/src/App'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function index() {

  const value = useSelector(state => state.value)
  const dispatch = useDispatch()
  return (
    <div>
      <p>{value}</p>
      <button onClick={() => dispatch(decrement())}>CLICK</button>
      <ReactPage/>
    </div>
  )
}
