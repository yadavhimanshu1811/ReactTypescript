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
import { Provider } from "react-redux";
import { store as NPMrepositoryStore } from "../src/state";
import { store as CounterReduxStore } from "./redux/store";

function App() {
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
          <Provider store={CounterReduxStore}>
          <CounterRedux />
          </Provider>
        </>
      ),
    },
    {
      path: "/NPMpackageSearch",
      element: (
        <>
          <Navbar />
          <Provider store={NPMrepositoryStore}>
            <NPMpackageSearch />
          </Provider>
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
