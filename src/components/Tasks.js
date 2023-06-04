// const tasks = [
//   { id: 1, text: "task1", day: "3 June 2023", reminder: false },
//   { id: 2, text: "task2", day: "4 June 2023", reminder: false },
//   { id: 3, text: "task3", day: "5 June 2023", reminder: false },
//   { id: 4, text: "task4", day: "6 June 2023", reminder: false },
// ];
import Task from "./Task";
const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task, index) => (
        // <h3 key={task.id}>{task.text}</h3>
        <Task
          key={index}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        ></Task>
      ))}
    </>
  );
};
Tasks.defaultProps = {
  tasks: [],
};

export default Tasks;
