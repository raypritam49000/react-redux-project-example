import { combineReducers, applyMiddleware, legacy_createStore } from "redux";
import { getAllEmployeeListReducer, getEmployeeByIdReducer } from '../employee';
import { composeWithDevTools } from 'redux-devtools-extension';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const rootReducers = combineReducers({
    getAllEmployeeListReducer,
    getEmployeeByIdReducer
});

export const store = legacy_createStore(rootReducers, composeWithDevTools(
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    ))
);