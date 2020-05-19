import React from 'react';
import './with-spinner.styles.scss';

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <div className='loader'>...Loading</div>
  ) : (
    <WrappedComponent {...otherProps}/>
  );
}

export default WithSpinner;
