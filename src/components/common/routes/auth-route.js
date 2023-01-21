import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useUserState from '../../../store/user';
import {toast} from 'react-toastify';

const AuthRoute = ({component: Component, minStatus, role, ...rest}) => {

  const {user} = useUserState();
  const authed = (user !== null && user !== undefined);

  let newPath = '/login'
  if(window.location.pathname !== ""){
    let redirect = window.location.pathname+window.location.search
    newPath += '?redirect='+encodeURIComponent(redirect);
  }
  
  let props = {...rest};
  if(props.path !== undefined){
    localStorage.setItem("redirectPath",props.path);
  }

  if(minStatus !== undefined && authed === true && user.status < minStatus){
    let msg = "This account does not have sufficient permissions to view that page. ";
    msg += "If this account was recently given new permissions, sign out, then sign in again and retry. ";
    toast.error(msg);
    return <Redirect to="/" />
  }

  if(role !== undefined){
    if((authed && role.indexOf(user.id) === -1)){
      return <Redirect to="/" />
    }
  }

  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: newPath, state: {from: props.location}}} />}
    />
  )
}

export default AuthRoute;