import { useState } from "react";
import Button from "../Components/Button";

function TodoList() {
  const [list, setList] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [taskDoneIndexes, setTaskDoneIndexes] = useState<number[]>([]);

  const addToList = () => {
    if (inputValue.length == 0) {
      alert("Please write something before adding to the list");
    } else {
      setList([...list, inputValue]);
      setInputValue("");
    }
  };

  const deleteFromList = (index: number) => {
    list.splice(index, 1);
    setList([...list]);
  };

  const taskDone = (index: number) => {
    if (taskDoneIndexes.indexOf(index) == -1) {
      setTaskDoneIndexes([...taskDoneIndexes, index]);
    } else {
      taskDoneIndexes.splice(taskDoneIndexes.indexOf(index), 1);
      setTaskDoneIndexes([...taskDoneIndexes]);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center bg-dark"
      style={{ height: "100vh" }}
    >
      <div className="p-5 bg-light border rounded" style={{ height: "500px", width:"600px" }}>
        <h1>TODO List</h1>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a new task..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button
            className="btn btn-primary"
            text="Add"
            onButtonClick={addToList}
          />
        </div>
        <ul className="list-group">
          {list.map((it, index) => (
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <span
                className={
                  taskDoneIndexes.includes(index)
                    ? "text-muted text-decoration-line-through"
                    : ""
                }
              >
                {it}
              </span>
              <div className="d-flex gap-2">
                <Button
                  text={taskDoneIndexes.includes(index) ? "Reopen" : "Done"}
                  className={`btn btn-sm ${
                    taskDoneIndexes.includes(index) ? "" : "btn-success"
                  }`}
                  onButtonClick={() => taskDone(index)}
                />
                <Button
                  text="Delete"
                  className="btn btn-outline-danger btn-sm"
                  onButtonClick={() => deleteFromList(index)}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;

// improvements
// 1. Store object {id, text, done} rather than different states for text and taskdonelist
// 2. Memoisation
// 3. CSS
