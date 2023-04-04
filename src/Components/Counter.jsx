import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { increment,decrement } from '../redux/slices/CounterSlice'

function Counter() {

    const count = useSelector((state)=> state.counter.value)
    const dispatch=useDispatch()
  return (
    <div className=' h-screen flex justify-center items-center '>
    <div className='flex bg-[rgba(255,255,255,.3)] items-center p-2'>
    <button onClick={()=> dispatch(decrement())}
        className='px-4 py-1 text-lg uppercase border-r-4'>
        Decrement</button>
        <br />
         <br />
         <div className='px-4 py-2  text-lg font-bold'>
            {count}
         </div>
         <br />
         <br />
         <button onClick={()=> dispatch(increment())}
         className='px-4 py-1 text-lg uppercase border-l-4'>
         Increment</button>
    </div>
    
    </div>
  )
}

export default Counter