import "./App.css";
import { useState } from "react";
import TaskCard from "./components/TaskCard.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
function App() {
  const [Tasks, setTasks] = useState([]);
  const [Value, setValue] = useState("");

  const addTask = (task) => {
    setTasks(Tasks.concat(task));
  };

  const clearTasks = () => {
    setTasks([]);
  };
  //async deleting
  async function deleteTasks(task) {
    const Id = (element) => element == task;
    console.log(Tasks.findIndex(Id));
    await Tasks.splice(Tasks.findIndex(Id), 1);
    setTasks(Tasks);
  }

  return (
    <div className="App">
      <input
        placeholder="Type in a task here"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />

      <button
        onClick={() => {
          addTask([Value]);
        }}
      >
        Add Task
      </button>

      <button
        onClick={() => {
          clearTasks();
        }}
      >
        <FontAwesomeIcon icon={faRotateRight} />
      </button>

      <div>
        {Tasks?.length > 0 ? (
          Tasks.map((task) => (
            <div>
              <TaskCard
                task={task}
                key={task}
                func={() => {
                  deleteTasks(task);
                }}
              />
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default App;
