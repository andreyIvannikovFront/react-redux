import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import rootReducer from './reducers/index'
import thunk from 'redux-thunk'

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk))

export default store
