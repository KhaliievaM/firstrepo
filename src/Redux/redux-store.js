import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import {combineReducers, legacy_createStore} from "redux"
// let store = legacy_createStore()

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
})
let store = legacy_createStore(reducers);
export default store;