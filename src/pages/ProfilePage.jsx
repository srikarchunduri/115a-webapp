import React from 'react'
import { demoAlbums } from '../data/demo'

export default function ProfilePage(){
  // demo static profile
  const saved = demoAlbums.slice(0,2)
  return (
    <div className="profile-page">
      <div className="profile-hero glass">
        <div className="profile-avatar neon-avatar large">S</div>
        <div>
          <h2>Srikar Chunduri</h2>
          <p className="muted">Music diary • 12 saved albums</p>
          <p className="bio">Producer-in-training. I write about mood and vibe.</p>
        </div>
      </div>

      <section className="profile-section">
        <h3>Saved Albums</h3>
        <div className="album-grid">
          {saved.map(a => <div key={a.id}><img src={a.cover} alt="" className="thumb" /><div className="meta">{a.title}<br/><small>{a.artist}</small></div></div>)}
        </div>
      </section>
    </div>
  )
}
