import React ,{ useState }from "react";
import styles from "./counter.module.css";

const Counter = () => {
  // sample value to be replaced
  
  const [count ,setCounter] = useState(1);
  const handleincre = (value) => {
     setCounter(count +_value);
  }
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={() => handleincre(1)}>+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button" nClick={() => handleincre(-1)} disabled={count === 0} >-</button>
    </div>
  );
};

export default Counter;
