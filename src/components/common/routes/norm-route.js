import React from 'react';
import { Route } from 'react-router-dom';

const NormRoute = ({component: Component, ...rest}) => {

  let props = {...rest};
  if(props.path !== undefined){
    localStorage.setItem("redirectPath",props.location.pathname);
  }

  return (
    <Route
      {...rest}
      render={(props) => <Component {...props} />}
    />
  )
}

export default NormRoute;