import React, { useEffect, useState } from 'react'
import { useAppDispatch } from '../Redux/hooks/hooks';
import { CounterReducer } from '../Redux/reducer/Counter-reducer';

interface objectCount {
   id: number,
   value: number,
   index: number
}

export default function IntervalCounter({ id, value, index }: objectCount) {
   const dispatch = useAppDispatch();
   const { increment, deleteCounter } = CounterReducer.actions;
   useEffect(() => {
      const interval = setInterval(() => {
         dispatch(increment(id))
      }, 1000);
      return () => clearInterval(interval);
   }, [id]);
   return (
      <>
         <div style={{
            marginBottom: '15px'
         }}>
            <span>{index}.</span>
            <span style={{ marginLeft: '10px' }}>{value}</span>
            <button style={{ marginLeft: '10px' }} onClick={() => dispatch(deleteCounter(id))}>
               Delete Count
            </button>
         </div >
      </>
   )
}
