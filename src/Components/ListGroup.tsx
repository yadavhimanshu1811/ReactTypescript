function ListGroup() {
  let items = ["Delhi", "Mumbai", "Jaipur"];
  items = [];

  const getErrorMessage = () =>{
    return items.length == 0 ? <p>Add some items</p> : null;
  }

  return (
    <>
      {items.length ? (
      <ul className="list-group">
        <li className="list-group-item">Cras justo odio</li>
        <li className="list-group-item">Dapibus ac facilisis in</li>
        {items.map((it) => (
          <li key={it} className="list-group-item">
            {it}
          </li>
        ))}
      </ul>
      ) : <div>No items found</div>}
      {getErrorMessage()}
    </>
  );
}

export default ListGroup;
