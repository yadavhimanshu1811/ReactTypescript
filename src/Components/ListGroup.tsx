import { MouseEvent, useState } from "react";

interface Props {
  items: string[];
  onSelectItem: (item: string) => void;
}

function ListGroup(props: Props) {
  let items = props.items.length
    ? props.items
    : ["Delhi", "Mumbai", "Jaipur", "kanpur", "Goa"];
  //   items = [];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const getErrorMessage = () => {
    return items.length == 0 ? <p>Add some items</p> : null;
  };
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <div style={{width:"30%"}} className="p-1">
      {items.length ? (
        <ul className="list-group">
          <li
            className="list-group-item"
            onClick={(event) => {
              console.log(event);
            }}
          >
            item 1
          </li>
          <li
            className="list-group-item"
            onClick={handleClick} //dont call the function
          >
            item 2
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
                props.onSelectItem(it);
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
    </div>
  );
}

export default ListGroup;
