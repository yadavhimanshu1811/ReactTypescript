import { useState } from "react";
import Button from "../Components/Button";

function TodoList() {
  const [list, setList] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const addToList = () => {
    if (inputValue.length == 0) {
      alert("Please write something before adding to the list");
    } else {
      setList([...list, inputValue]);
      setInputValue("");
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
          {list.map((it) => (
            <li className="list-group-item">{it}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
