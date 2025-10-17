import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingPage(){
  return (
    <div className="landing">
      <div className="landing-card glass">
        <h1 className="landing-title">Groovo</h1>
        <p className="landing-sub">A social diary for the music you love — write reviews, share favorites, discover music.</p>
        <div className="landing-cta">
          <Link to="/signup" className="btn primary">Sign Up (demo)</Link>
          <Link to="/login" className="btn outline">Log In</Link>
        </div>
        <p className="small-muted">Sprint 1 demo — profile & reviews</p>
      </div>
      <div className="gradient-bg" aria-hidden />
    </div>
  )
}
