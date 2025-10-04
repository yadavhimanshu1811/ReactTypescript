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
      <div className="p-5 bg-light border rounded" style={{ height: "500px" }}>
        <h1>TODO List</h1>
        <div>
          <input
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <Button text="Add" onButtonClick={addToList} />
        </div>
        <ul className="list-group">
          {list.map((it, index) => (
            <li className="list-group-item">
              <span
                className={
                  taskDoneIndexes.includes(index)
                    ? "text-muted text-decoration-line-through"
                    : ""
                }
              >
                {it}
              </span>
              <Button
                text={taskDoneIndexes.includes(index) ? "Reopen" : "Done"}
                onButtonClick={() => taskDone(index)}
              />
              <Button
                text="Delete"
                onButtonClick={() => deleteFromList(index)}
              />
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
