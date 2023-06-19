import React from 'react'

const Register = () => {


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('submit')
  }



  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='username' />
        <input type="text" placeholder='password' />
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default Register