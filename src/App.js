import { useState } from "react";
import "./App.css";
import Input from "./components/Input";

const App = () => {
  const [tasks, setTasks] = useState([]);
  console.log(tasks);

  const save = (data) => {
    setTasks((prev) => [...prev, data]);
  };

  return (
    <div className="App">

      <div>
        <Input onSave={save} />
      </div>
      {tasks.map((el) => (
        <div>
          <h1>{el.name}</h1>
          <h2>{el.email}</h2>
          <h3>{el.password}</h3>
        </div>
      ))}
    </div>
  );
};

export default App;
