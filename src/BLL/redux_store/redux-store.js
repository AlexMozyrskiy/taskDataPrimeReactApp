import {createStore, combineReducers, applyMiddleware} from "redux";
import thunkMiddleWare from "redux-thunk";
import { compose } from "redux";
import textAreaReducer from "../textArea/reducer";
// import loginModalWindowReducer from "../loginModalWindow/reducer";
// import authUserDataReducer from "../authUserData/reducer";
// import headerReducer from "../header/reducer";
// import initializedAppReducer from "../initializedApp/reducer";
// import notOwnerUserDataReducer from "../notOwnerUserData/reducer";
// import ownerProfilePageReducer from "../ownerProfilePage/reducer";
// import usersReducers from "../users/reducer";


let reducers = combineReducers({
    textArea: textAreaReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleWare)
  ));                                       // это для использования extension'а redux dev tools в Google Chrome

export default store;