import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../state/actions/counterActions';

export default function Counter() {
    const {count,lastAction} = useSelector(state => state.counterReducer)
    const dispatch = useDispatch()

    return (
        <>
            <h1>Counter value: {count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <p>Last Action: {lastAction}</p>
        </>
    )
}