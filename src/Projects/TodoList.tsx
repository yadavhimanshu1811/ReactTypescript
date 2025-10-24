import { useState, useEffect, useRef } from "react";
import Button from "../Components/Button";
import Alert from "../Components/Alert";

function TodoList() {
  const [list, setList] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [taskDoneIndexes, setTaskDoneIndexes] = useState<number[]>([]);
  const [showAlert, setShowAlert] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef && inputRef.current && inputRef.current.focus();
  }, []);

  const addToList = () => {
    if (inputValue.length == 0) {
      setShowAlert(true);
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
      style={{ height: "100vh", width: "30%" }}
    >
      <div
        className="p-1 bg-light border rounded"
        style={{ height: "90%", width: "90%" }}
      >
        {showAlert ? (
          <Alert
            closeAlert={() => {
              setShowAlert(false);
            }}
          >
            Hello <span>{"Himanshu"}</span>, Please write something before
            adding to the list !
          </Alert>
        ) : null}
        <h1>TODO List</h1>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a new task..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            ref={inputRef}
          />
          <Button
            className="btn btn-primary"
            text="Add"
            onButtonClick={addToList}
          />
        </div>
        <ol className="list-group overflow-scroll" style={{ height: "75%" }}>
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
        </ol>
      </div>
    </div>
  );
}

export default TodoList;

// improvements
// 1. Store object {id, text, done} rather than different states for text and taskdonelist
// 2. Memoisation
// 3. CSS
