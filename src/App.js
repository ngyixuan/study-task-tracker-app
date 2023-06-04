import "@/index.less";
import Header from "@/components/Header";
import Tasks from "@/components/Tasks";
import AddTask from "@/components/AddTask";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import About from "@/components/About";
import TaskDetails from "@/components/TaskDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  // const [tasks, setTasks] = useState([
  //   { id: 1, text: "task1", day: "3 June 2023", reminder: false },
  //   { id: 2, text: "task2", day: "4 June 2023", reminder: false },
  //   { id: 3, text: "task3", day: "5 June 2023", reminder: false },
  //   { id: 4, text: "task4", day: "6 June 2023", reminder: false },
  // ]);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchTasks();
      setTasks(taskFromServer);
    };

    getTasks();
  }, []);
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:3000/tasks");
    const data = await res.json();
    return data;
  };
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:3000/tasks/${id}`);
    const data = await res.json();

    return data;
  };
  const deleteTask = async (id) => {
    await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
    const res = await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });
    const data = await res.json();
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !data.reminder } : task
      )
    );
  };
  const addTask = async (task) => {
    const res = await fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    setTasks([...tasks, data]);

    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);
  };
  return (
    <Router>
      <div>
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {showAddTask && <AddTask onAdd={addTask} />}

                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onToggle={toggleReminder}
                    onDelete={deleteTask}
                  />
                ) : (
                  "No Tasks"
                )}
              </>
            }
          />

          <Route path="/about" element={<About />}></Route>
          <Route path="/task/:id" element={<TaskDetails />}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
};

export default App;
