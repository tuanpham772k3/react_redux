import { combineReducers } from "redux";
import counterReducer from '../Reducer/CounterReducer';
import userReducer from '../Reducer/UserReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    users: userReducer,
})

export default rootReducer;
