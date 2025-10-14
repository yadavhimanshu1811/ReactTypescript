import ListGroup from "./Components/ListGroup";
import TodoList from "./Projects/TodoList";
import InstagramDetails from "./Projects/InstagramDetails/InstagramDetails";
import RunningDetails from "./Projects/RunningDetails/RunningDetails";

function App() {
  let cities = ["Delhi", "Mumbai", "Jaipur", "kanpur", "Goa"];
  let countries = ["India", "Nepal", "China", "Russia", "America"];

  const handleSelectItem = (item: string)=>{
    console.log("App",item);
  }
  return (
    <div className="d-flex">
      <TodoList/>
      {/* <ListGroup items={countries} onSelectItem ={handleSelectItem}/> */}
      <InstagramDetails/>
      {/* <RunningDetails/> */}
    </div>
  );
}

export default App;
