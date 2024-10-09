import { mainIncrement } from '@/components/store/mainSlicer'
import ReactPage from '@/projects/reactproject/src/App'
import { store } from '@/projects/reactproject/src/store/reducer'
import React from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'

export default function index() {

  const value = useSelector(state => state.mainData.value)
  const dispatch = useDispatch()
  return (
    <Provider store={store}>
    <div>
      <p>{value}</p>
      <button onClick={() => dispatch(mainIncrement())}>CLICK</button>
      <ReactPage/>
    </div>

    </Provider>
  )
}
