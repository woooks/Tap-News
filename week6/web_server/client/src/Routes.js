import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import Base from './Base/Base';
import App from './App/App';
import LoginPage from './Login/LoginPage';
import SignUpPage from './SignUp/SignUpPage';
import Auth from './Auth/Auth';


function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Base} />
      <PrivateRoute exact path="/" component={App}/>
      <Route path="/login" render={({history})=><LoginPage history={history}/>}/>
      <Route path="/signup" render={({history})=><SignUpPage history={history}/>}/>
      <Route path="/logout" render={({history})=>{
        Auth.deauthenticateUser();
        history.replace('/');
        return null;
      }}/>
    </BrowserRouter>
  );
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    Auth.isUserAuthenticated === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)


function Temp() {
  return <div>temp</div>
}

export default Routes;
