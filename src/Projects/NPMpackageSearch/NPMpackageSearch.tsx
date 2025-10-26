import { useState } from "react";
import Button from "../../Components/Button";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelectors";
import { actionCreators } from "../../state";
import { Actiontype } from "../../state/action-types";

const NPMpackageSearch = () => {
  const [term, setTerm] = useState("");
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );
  const dispatch = useDispatch();

  const searchClicked = () => {
    dispatch(actionCreators.searchRepositories(term) as any);
  };

  const resetList = () => {
    setTerm("");
    dispatch({
      type: Actiontype.RESET_REPOSITORIES,
    });
  };

  const showData = () => {
    // console.log("data", data);
    return loading ? (
      <h3>Loading....</h3>
    ) : error ? (
      <h3>{error}</h3>
    ) : (
      data.map((name: string, index: number) => {
        return <div key={name + index}>{name}</div>;
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
      <Button text="Reset List" onButtonClick={resetList} />
      {showData()}
    </div>
  );
};

export default NPMpackageSearch;
