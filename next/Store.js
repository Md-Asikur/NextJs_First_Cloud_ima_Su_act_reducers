import { combineReducers, applyMiddleware,createStore } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
const middleware = [thunk]
import { createProductReducer } from "./reducers/productReucer"
const reducers = combineReducers({
  products: createProductReducer,
});
export const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware))
)
