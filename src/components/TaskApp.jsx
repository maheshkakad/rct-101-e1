import React from "react";
import AddTask  from "./AddTask/AddTask";
import styles from "./taskApp.module.css";
import Task from "./Task/Task";
import Taskheader from './TaskHeader/TaskHeader';

const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      <Taskheader/>
      {/* Add Task */}
      <AddTask/>
      {/* Tasks */}
      <Task/>
    </div>
  );
};

export default TaskApp;
