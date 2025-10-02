import Message from "./Components/Message";
import Button from "./Components/Button";
import ListGroup from "./Components/ListGroup";

function App() {
  let cities = ["Delhi", "Mumbai", "Jaipur", "kanpur", "Goa"];
  let countries = ["India", "Nepal", "China", "Russia", "America"];

  const handleSelectItem = (item: string)=>{
    console.log("App",item);
  }
  return (
    <div>
      <Message Heading= "Himanshu Yadav" />
      <ListGroup items={cities} onSelectItem ={handleSelectItem} />
      <Button text={"Ok Done"} />
      <Button text={"Enter"} />
      <ListGroup items={countries} onSelectItem ={handleSelectItem}/>
    </div>
  );
}

export default App;
