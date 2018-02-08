import React from 'react';
import Loader from './../components/Loader';
import * as ErrorComponent from './../components/Error';

export default  (Component) => {
  return (isLoading, isError, ...rest) => {
    console.log(isLoading, isError);
    return isLoading ? (
      <Loader />
    ) : isError ? (
      <ErrorComponent />
    ) : (
          <Component {...rest} />
        );
  };
};
