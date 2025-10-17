import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginPage(){
  const [email, setEmail] = useState('')
  const [pw, setPw] = useState('')
  const navigate = useNavigate()

  function submit(e){
    e.preventDefault()
    // demo flow: just go to /home
    navigate('/home')
  }

  return (
    <div className="auth-page">
      <form className="auth-card glass" onSubmit={submit}>
        <h3>Welcome back</h3>
        <input className="form-input" placeholder="email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="form-input" placeholder="password" type="password" value={pw} onChange={e=>setPw(e.target.value)} />
        <div className="auth-actions">
          <button className="btn primary" type="submit">Log in</button>
        </div>
      </form>
    </div>
  )
}
