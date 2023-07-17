import React from 'react';
import loadingImage from './Spinner-1s-200px.gif';

const Loading=()=> {
 
    return (
      <div className='text-center'>
        <img src={loadingImage} alt="Loading" />
      </div>
    );
  
}

export default Loading