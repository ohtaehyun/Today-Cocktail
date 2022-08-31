import {combineReducers} from "redux";
import todo, { ITodoState } from "./modules/todo";
export interface IStoreState {
    todo: ITodoState
}
const rootReducer = combineReducers<IStoreState>({
    todo,
});

export type ReducerType = ReturnType<typeof rootReducer>;
export default rootReducer;