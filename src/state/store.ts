import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import reducers from "./reducers";

export const store = createStore(reducers, {}, applyMiddleware(thunk));

//TODO try to remove the deprecated createStore