import { useState } from "react";
import Button from "../../Components/Button";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelectors";
import { actionCreators } from "../../state";

const RepositoriesList = () => {
  const [term, setTerm] = useState("");
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );
  const dispatch = useDispatch();

  const searchClicked = () => {
    dispatch(actionCreators.searchRepositories(term) as any);
  };

  const showData = () => {
    // console.log("data", data);
    return loading ? (
      <h3>Loading....</h3>
    ) : error ? (
      <h3>{error}</h3>
    ) : (
      data.map((name: string, index: number) => {
        return <div key={name+index}>{name}</div>;
      })
    );
  };

  return (
    <div>
      <input
        value={term}
        onChange={(e) => {
          setTerm(e.target.value);
        }}
      />
      <Button text="Search" onButtonClick={searchClicked} />
      {showData()}
    </div>
  );
};

export default RepositoriesList;
