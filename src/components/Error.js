import React from 'react'
import { useRouteError } from 'react-router';

const Error = () => {

    const err = useRouteError();
    console.log(err);

  return (
    <div>
        <h1 style={{background:"white", color:"red"}}> Oops: Something went wrong</h1>
        <h2>Status: {err.statusText}</h2>
        <h3>{err.data}</h3>
    </div>
  )
}

export default Error