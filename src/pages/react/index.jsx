import { mainIncrement } from '@/components/store/mainSlicer'
import ReactPage from '@/projects/reactproject/src/App'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function index() {

  const value = useSelector(state => state.mainData.value)
  const dispatch = useDispatch()
  return (
    <div>
      <p>{value}</p>
      <button onClick={() => dispatch(mainIncrement())}>CLICK</button>
      <ReactPage/>
    </div>
  )
}
