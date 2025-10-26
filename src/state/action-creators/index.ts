import axios from "axios";
import { Actiontype } from "../action-types";
import { Action } from "../actions";
import { Dispatch } from "redux";

export const searchRepositories = (term : string) => {
    return async (dispatch:Dispatch<Action>) => {
        dispatch({
            type: Actiontype.SEARCH_REPOSITORIES
        });

        try {
            const {data} = await axios.get('https://registry.npmjs.org/-/v1/search', {
                params:{
                    text: term
                }
            });
            const names = data.objects.map((result: any)=>{
                return result.package.name
            })

            dispatch({
                type: Actiontype.SEARCH_REPOSITORIES_SUCCESS,
                payload: names
            })



        } catch (err){
            if(err instanceof Error){
                dispatch({
                    type: Actiontype.SEARCH_REPOSITORIES_ERROR,
                    payload: err.message
                });
            }
            
        }


    };

}