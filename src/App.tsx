import ListGroup from "./Components/ListGroup";
import TodoList from "./Projects/TodoList";
import InstagramDetails from "./Projects/InstagramDetails/InstagramDetails";
import RunningDetails from "./Projects/RunningDetails/RunningDetails";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import StravaInsights from "./Projects/Strava Insights/StravaInsights";
import WeatherApp from "./Projects/WeatherAppClassBased/WeatherApp";
import NPMpackageSearch from "./Projects/NPMpackageSearch/NPMpackageSearch";
import CounterRedux from "./Projects/CounterRedux/CounterRedux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Components/Button";
import { increment, decrement, reset, incrementByAmount } from "./redux/counter/counterSlice";

function App() {
  let cities = ["Delhi", "Mumbai", "Jaipur", "kanpur", "Goa"];
  let countries = ["India", "Nepal", "China", "Russia", "America"];
  
  const dispatch = useDispatch();

  const handleSelectItem = (item: string) => {
    console.log("App", item);
  };

  const router = createBrowserRouter([
    {
      path: "/login",
      element: (
        <>
          <Navbar />
          <Login />
        </>
      ),
    },
    {
      path: "/todolist",
      element: (
        <>
          <Navbar />
          <TodoList />
        </>
      ),
    },
    {
      path: "/instagramDetails",
      element: (
        <>
          <Navbar />
          <InstagramDetails />
        </>
      ),
    },
    {
      path: "/runningDetails",
      element: (
        <>
          <Navbar />
          <RunningDetails />
        </>
      ),
    },
    {
      path: "/stravaInsights",
      element: (
        <>
          <Navbar />
          <StravaInsights />
        </>
      ),
    },
    {
      path: "/WeatherApp",
      element: (
        <>
          <Navbar />
          <WeatherApp welcomeMsg="Welcome to the Weather app !!" />
        </>
      ),
    },
    {
      path: "/counterRedux",
      element: (
        <>
          <Navbar />
          <CounterRedux />
        </>
      ),
    },
    {
      path: "/NPMpackageSearch",
      element: (
        <>
          <Navbar />
          <NPMpackageSearch />
        </>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
