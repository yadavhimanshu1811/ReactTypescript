import { Actiontype } from "../action-types";

interface SearchRepositoriesAction{
    type: Actiontype.SEARCH_REPOSITORIES;
}
interface SearchRepositoriesSuccess{
    type: Actiontype.SEARCH_REPOSITORIES_SUCCESS;
    payload: string[]
}
interface SearchRepositoriesError{
    type: Actiontype.SEARCH_REPOSITORIES_ERROR;
    payload: string
}
interface ResetRepositories{
    type: Actiontype.RESET_REPOSITORIES;
}
export type Action = SearchRepositoriesAction | SearchRepositoriesSuccess | SearchRepositoriesError | ResetRepositories;



