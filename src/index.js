import React, { Fragment } from "react";
import ReactDom from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import axios from "axios";
import logger from 'redux-logger';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from 'react-router-config'
import Routes from "./routes";
import reducers from "./reducer";


const axiosInstance = axios.create({
	baseURL: "/api"
})
const config = applyMiddleware(thunk.withExtraArgument(axiosInstance), logger);
const store = createStore(reducers, typeof window !== 'undefined' && window && window.INITIAL_STATE, config);

ReactDom.hydrate(
   <Provider store={store}>
      <BrowserRouter>
         <Fragment>{renderRoutes(Routes)}</Fragment>
      </BrowserRouter>
   </Provider>
   , document.querySelector("#root"));