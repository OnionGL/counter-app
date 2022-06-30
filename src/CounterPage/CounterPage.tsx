import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../Redux/hooks/hooks';
import { CounterReducer } from '../Redux/reducer/Counter-reducer';
import IntervalCounter from './IntervalCounter';

export default function CounterPage() {
   const { increment, decrement, addCounter, deleteCounter } = CounterReducer.actions;
   const { value } = useAppSelector(state => state.CounterReducer)
   const dispatch = useAppDispatch()
   return (
      <div style={{
         margin: '50px 0 0 50px'
      }}>
         <div>
            {value?.map((count, index) =>
               <>
                  {(index + 1) % 4 === 0 ? <IntervalCounter id={count.id} value={count.value} index={index + 1} /> :
                     <div style={{
                        marginBottom: '15px'
                     }}
                        key={count.id}>
                        <span>{index + 1}.</span>
                        <button
                           style={{
                              margin: '0 10px 0 10px',
                           }}
                           aria-label="Decrement value"
                           onClick={() => dispatch(decrement(count.id))}
                        >
                           -
                        </button>
                        <span>{count.value}</span>
                        <button
                           style={{
                              marginLeft: '10px',
                           }}
                           aria-label="Increment value"
                           onClick={() => dispatch(increment(count.id))}
                        >
                           +
                        </button>
                        <button style={{ marginLeft: '10px' }} onClick={() => dispatch(deleteCounter(count.id))}>
                           Delete Count
                        </button>

                     </div>
                  }
               </>
            )}
         </div>
         <button
            style={{
               marginTop: '10px',
            }}
            onClick={() => dispatch(addCounter())}
         >
            Add Counter
         </button>
      </div>
   )
}
