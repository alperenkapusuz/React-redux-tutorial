import { increment, decrement } from "../stores/Counter";
import { useDispatch } from "react-redux";

function CounterActions() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>Azalt(-)</button>
      <button onClick={() => dispatch(increment())}>Arttır(+)</button>
    </div>
  );
}

export default CounterActions;
