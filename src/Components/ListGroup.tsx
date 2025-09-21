function ListGroup() {
  const items = ["Delhi", "Mumbai", "Jaipur"];

  return (
    <ul className="list-group">
      <li className="list-group-item">Cras justo odio</li>
      <li className="list-group-item">Dapibus ac facilisis in</li>
      {items.map((it) => (
        <li key={it} className="list-group-item">
          {it}
        </li>
      ))}
    </ul>
  );
}

export default ListGroup;
