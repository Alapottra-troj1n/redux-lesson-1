import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {increment,
       decrement,
       resetState,
       incrementByAmount
    
    } from './counterSlice';

const Counter = () => {

    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const [incrementAmount, setIncrementAmount] = useState(0);
    const addValue = Number(incrementAmount) || 0;

    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(resetState());
    }


    return (
        <div>
            <section>
                <p>{count}</p>
                <div>
                    <button onClick={()=> dispatch(increment()) } >
                            +
                    </button>
                    <button onClick={()=> dispatch(decrement())}>
                            -
                    </button>


             

                </div>
                <div>
                    
                <input type="text" name="" value={incrementAmount}
                    onChange={e => setIncrementAmount(e.target.value)}
                    
                    />
                        <button onClick={()=> dispatch(incrementByAmount(addValue)) } >
                            Add Amount
                        </button>
                        <button onClick={()=> dispatch(resetState()) }>reset</button>
                    </div>
            </section>
            
        </div>
    );
};

export default Counter;