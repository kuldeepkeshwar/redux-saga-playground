import React from 'react';
import Loader from 'components/Loader';
import * as ErrorComponent from 'components/Error';

export default  (Component) => {
  return (props,context) => {
    const { isLoading, isError, ...rest} = props;
    return isLoading ? (
      <Loader />
    ) : isError ? (
      <ErrorComponent />
    ) : (
          <Component {...rest} />
        );
  };
};
