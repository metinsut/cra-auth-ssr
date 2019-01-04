import axios from "axios";
import thunk from 'redux-thunk';
import { createStore } from "redux";
import reducers from "../../src/reducer";

export default (req) => {
    const axiosInstance = axios.create({
        baseURL: "http://react-ssr-api.herokuapp.com",
        headers: { cookie: req.get("cookie") || "" }
    })

    const store = createStore(reducers, {}, thunk.withExtraArgument(axiosInstance));

    return store;
}