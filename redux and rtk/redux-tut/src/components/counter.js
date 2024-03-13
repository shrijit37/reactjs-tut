//to use the stored logic we need useSelector and useDispatch

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../app/feature/counter/counterSlice";

const Counter = () => {
  //read the data from the store
  const count = useSelector((state) => state.counter.value);
  //changing the data
    const dispatch = useDispatch();
  return (
    <>
      <h1>{count}</h1>
      <button onClick={()=>dispatch(increment)}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
    </>
  );
};

export default Counter;
