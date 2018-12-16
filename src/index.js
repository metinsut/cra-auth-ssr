import React, { Fragment } from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from 'react-router-config'
import Routes from "./routes";
import store from "./reducer";

ReactDom.hydrate(
   <Provider store={store}>
      <BrowserRouter>
         <Fragment>{renderRoutes(Routes)}</Fragment>
      </BrowserRouter>
   </Provider>
   , document.querySelector("#root"));