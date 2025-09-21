import { MouseEvent, useState } from "react";

function ListGroup() {
  let items = ["Delhi", "Mumbai", "Jaipur", "kanpur", "Goa"];
  //   items = [];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const getErrorMessage = () => {
    return items.length == 0 ? <p>Add some items</p> : null;
  };
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      {items.length ? (
        <ul className="list-group">
          <li
            className="list-group-item"
            onClick={(event) => {
              console.log(event);
            }}
          >
            Cras justo odio
          </li>
          <li
            className="list-group-item"
            onClick={handleClick} //dont call the function
          >
            Dapibus ac facilisis in
          </li>
          {items.map((it, index) => (
            <li
              key={it}
              className={`list-group-item ${
                selectedIndex == index && "active"
              }`}
              onClick={(event) => {
                console.log(it, index, event);
                setSelectedIndex(index);
              }}
            >
              {it}
            </li>
          ))}
        </ul>
      ) : (
        <div>No items found</div>
      )}
      {getErrorMessage()}
    </>
  );
}

export default ListGroup;
