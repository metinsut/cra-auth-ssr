import App from '../App';
import Home from "../component/home/home.js";
import Protected from "../component/protected/protected"
import UsersListPage from "../component/userList/UserListPage";
import PostList from "../component/postList/PostList";
import SignUp from "../component/signUp/signUp";
import LogIn from "../component/login/login";
import NotFoundPage from "../component/404/NotFoundPage";
import { ALLPAGES, HOME, PROTECTED, USERS, USERS_ID, LOGIN, SIGNUP } from "../constant/routesPath";

export default [
   {
      ...App,
      routes: [
         {
            ...Home,
            path: "/",
            exact: true
         },
         {
            ...Home,
            path: HOME
         },
         {
            ...Protected,
            path: PROTECTED
         },
         {
            ...LogIn,
            path: ALLPAGES + LOGIN
         },
         {
            ...SignUp,
            path: ALLPAGES + SIGNUP
         },
         {
            ...UsersListPage,
            path: USERS,
            routes: [
               {
                  path: USERS_ID,
                  ...PostList
               }
            ]
         },
         {
            ...NotFoundPage
         }
      ]
   }
]


