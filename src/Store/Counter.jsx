import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './CounterSlice';
function Counter() {
    const count = useSelector((state) => state.count.count);
    const dispatch = useDispatch();
    return (
        <div className='absolute top-3/4 left-1/2 -translate-x-1/2 bg-orange-400 py-2 px-16 rounded-2xl translate-y-1/2'>
            <div className=' text-center text-5xl font-bold'>{count}</div>
            <div>
                <button className='inline-block py-4 px-6 text-white bg-orange-800  font-bold text-3xl hover:opacity-90 rounded-2xl' onClick={() => dispatch(increment())}>+</button>&nbsp;
                <button className='inline-block py-4 px-7 text-white bg-orange-800 font-bold text-3xl hover:opacity-90 rounded-2xl' onClick={() => dispatch(decrement())}>-</button>
            </div>
        </div>
    )
}

export default Counter