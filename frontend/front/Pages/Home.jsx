import React from 'react'

export const Home = () => {

  const getData = async () => {
    const response = await fetch('http://localhost:3000/test', {
      method : 'GET',
      headers : { 'Content-Type' : 'application/json' }
    })

    // const result = await response.json()
    console.log(response);    
  }

  return (
    <div>

      <button className='bg-red-200' onClick = {getData} >Click Me</button>
      <div>Home</div>
    </div>
  )
}
