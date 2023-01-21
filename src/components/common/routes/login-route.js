import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useUserState from '../../../store/user';

const LoginRoute = ({component: Component, ...rest}) => {
  const {redirectLoginPage} = useUserState();
  
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get('redirect');
  const newPath = ((myParam !== null) ? myParam : (localStorage.getItem("redirectPath") !== null)?localStorage.getItem("redirectPath"):"/");

  localStorage.setItem("redirectPath",newPath);

  return (
    <Route
      {...rest}
      render={(props) => redirectLoginPage === false
        ? <Component {...props} />
        : <Redirect to={{pathname: newPath, state: {from: props.location}}} />}
    />
  )
}

export default LoginRoute;