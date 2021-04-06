import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='error-page section'>
      <div classnName='error-container'>
        <h1>ooops! it's a dead end</h1>
        <Link to='/' className='btn btn-primary'>
          Home
        </Link>
      </div>
      
    </div>
  )
}

export default Error
