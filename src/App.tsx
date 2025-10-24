import ListGroup from "./Components/ListGroup";
import TodoList from "./Projects/TodoList";
import InstagramDetails from "./Projects/InstagramDetails/InstagramDetails";
import RunningDetails from "./Projects/RunningDetails/RunningDetails";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import StravaInsights from "./Projects/Strava Insights/StravaInsights";
import WeatherApp from "./Projects/WeatherAppClassBased/WeatherApp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  let cities = ["Delhi", "Mumbai", "Jaipur", "kanpur", "Goa"];
  let countries = ["India", "Nepal", "China", "Russia", "America"];

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
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
