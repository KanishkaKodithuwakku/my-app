import React, { useReducer} from 'react'


const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT : 'decrement',
    REST : 'rest'
}

function countReducer(state, action) { 
    switch (action.type) { 
        case ACTIONS.INCREMENT:
            return { count: state.count + 1 };
        case ACTIONS.DECREMENT:
            return { count: state.count - 1 }
        case ACTIONS.REST:
            return { count: state.count = 0 }
        default:
        return state.count;
    }

}

const Counter = () => { 
    const initialState = {
        count : 0
    }
    const [state, dispatch] = useReducer(countReducer, initialState);

    return (
      <>
        <p>{state.count}</p>
        <button onClick={() => dispatch({ type: "increment" })}>Icement</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>
      </>
    );

}
export default Counter;
