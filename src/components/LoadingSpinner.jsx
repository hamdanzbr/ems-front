import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

function LoadingSpinner() {
  return (
    <>
    <div className='d-flex justify-content-center align-items-crnter m-5 fw-bolder'>

    <Spinner animation="border" variant="success" />

    </div>
    </>
  )
}

export default LoadingSpinner