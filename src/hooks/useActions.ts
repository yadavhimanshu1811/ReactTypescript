import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { actionCreators } from "../state";

export const useActions = () =>{
    const dispatch = useDispatch();
    bindActionCreators(actionCreators, dispatch);
}
// Check why its not working