import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SearchArea from './Components/Header/SearchArea';
import Register from './Components/RegisterEvent/Register';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import UserEvent from './Components/UserEvent/UserEvent';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import AdminLogin from './Components/Admin/AdminLogin';
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
  <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path='/'>
        <SearchArea></SearchArea>
        </Route>
        <PrivateRoute path='/register/:id'>
        <Register></Register>
        </PrivateRoute>
        <PrivateRoute path='/UserEvent'> 
        <UserEvent></UserEvent>
        </PrivateRoute>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path='/admin'>
          <AdminLogin></AdminLogin>
        </Route>
        <Route path='*'>
          <ErrorPage></ErrorPage>
        </Route>
      </Switch>
    </Router>
  </UserContext.Provider>
  );
}

export default App;
