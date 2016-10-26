//a way to put multiple reducers in one place. an object of all reducers we need.
import { combineReducers } from "redux";

import user from "./ducks/userDuck";
import account from "./ducks/accountDuck";

export default combineReducers( {
	  account
	, user
} );
