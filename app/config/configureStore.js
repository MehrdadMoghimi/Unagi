import { compose, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import initialState from "./InitialState";
import rootReducer from "../reducers/rootReducer";
import { autoRehydrate } from "redux-persist";

const loggerMiddleware = createLogger();

export default function configureStore() {
  var store = createStore(
    rootReducer,
    undefined,
    compose(
      applyMiddleware(
        thunkMiddleware // lets us dispatch() functions
        // loggerMiddleware // neat middleware that logs actions
      ),
      autoRehydrate()
    )
  );
  return store;
}
