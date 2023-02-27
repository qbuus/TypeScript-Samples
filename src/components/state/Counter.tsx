import React, { useReducer } from "react";

type counterState = {
  count: number;
};

type update = {
  type: "increment" | "decrement";
  payload: number;
};

type reset = {
  type: "reset";
};

type CounterAction = update | reset;

const initialState = { count: 0 };

function reducer(state: counterState, action: CounterAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Count: {state.count}
      <button
        type="button"
        onClick={() => dispatch({ type: "increment", payload: 5 })}
      >
        Increment by 5
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: "decrement", payload: 5 })}
      >
        Decrement by 5
      </button>
      <button type="button" onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
