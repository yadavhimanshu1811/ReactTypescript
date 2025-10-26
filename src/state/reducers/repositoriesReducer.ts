import { Action } from "../actions";
import { Actiontype } from "../action-types";

interface RepositoriesState {
    loading: boolean;
    error: string | null;
    data: string[];
}

const initialState: RepositoriesState = {
    loading: false,
    error: null,
    data: []
}

const reducer = (
    state: RepositoriesState = initialState, 
    action: Action
): RepositoriesState =>{

switch(action.type){
    case Actiontype.SEARCH_REPOSITORIES:
        return {loading: true, error: null, data:[]};

    case Actiontype.SEARCH_REPOSITORIES_SUCCESS:
        return {loading: false, error: null, data: action.payload}


    case Actiontype.SEARCH_REPOSITORIES_ERROR:
        return {loading: false, error: action.payload, data: []}

    default:
        return state;
}
}

export default reducer;