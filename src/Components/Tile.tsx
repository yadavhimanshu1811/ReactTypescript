interface Props {
  fullName?: string;
  name?: string;
  userName: string;
  profilePicUrl?: string;
}

function Tile(props: Props) {
  return (
    <li className="list-group-item p-1">
      <p className="h6 mb-0">{props.fullName}</p>
      <p
        className="mb-0"
        style={{ fontSize: "12px" }}
      >{`@${props.userName}`}</p>
    </li>
  );
}

export default Tile;
