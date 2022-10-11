import { combineReducers } from 'redux'

import heroesSlice from "./heroes";
import heroSlice from "./hero";

export default combineReducers({ heroesSlice, heroSlice })