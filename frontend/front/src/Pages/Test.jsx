import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const Test = () => {

    const [data, setData] = useState()

    useEffect(() => {
        axios
        .get('http://localhost:3000/test')
        .then((response) => {
            setData(response.data);
        })
        .catch((error) => {
            console.log(error)
        })
    }, []);

  return (
    <div>
        <h1>React App</h1>
        {data && <p>Message from server: {data.message}</p>}
    </div>
  )
}
