import React, { useState } from 'react'
import { useEffect } from 'react'

const Login = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/user')
      .then((res) => res.json())
      .then(json => setUsers(json))
  }, [])
  



  return (
    <div>
      
    </div>
  )
}

export default Login