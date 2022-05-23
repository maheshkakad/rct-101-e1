import React from "react";
import styles from "./task.module.css";
import Counter from '../Counter/Counter';

const Task = (props) => {
  // NOTE: do not delete `data-cy` key value pair
  const {title,id,status,Delete} = props;

  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" />
      <div data-cy="task-text">{title}</div>
      {/* Counter here */}
      <Counter/>
      <button data-cy="task-remove-button" onClick={() =>Delete(id)}>Delete</button>
    </li>
  );
};

export default Task;
