import { useState, useEffect } from "react";
import {
  useParams,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Button from "./Button";
function TaskDetail() {
  const [loading, setLoading] = useState(true);
  const [task, setTask] = useState({});
  const [error, setError] = useState(null);

  const params = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    const fetchTask = async () => {
      const res = await fetch(`http://localhost:3000/tasks/${params.id}`);
      const data = await res.json();
      if (res.status === 404) {
        // navigate("/");
        setError("Task Not Found");
      }
      setTask(data);
      setLoading(false);
    };
    fetchTask();
    // if (error) {
    //   return <Navigate to="/" />;
    // }
  });
  return loading ? (
    <h3>Loading...</h3>
  ) : (
    <div>
      <o>{pathname}</o>
      <h3>{task.text}</h3>
      <p>{task.day}</p>
      <Button
        onClick={() => {
          navigate(-1);
        }}
        text="Go Back"
      />
    </div>
  );
}
export default TaskDetail;
