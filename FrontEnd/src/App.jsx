import React, { useState } from 'react'
import axios from 'axios'

export default function App() {
  const [data, setData] = useState([])
  axios.get('/api/user').then(res => setData(res.data))
  console.log(data)
  return (
    <>
      <h1>Hello World!</h1>
    </>
  )
}
