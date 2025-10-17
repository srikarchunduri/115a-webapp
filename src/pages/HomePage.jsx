import React from 'react'
import AlbumCard from '../components/AlbumCard'
import ReviewCard from '../components/ReviewCard'
import { demoAlbums, demoReviews } from '../data/demo'

export default function HomePage(){
  return (
    <div className="page-grid">
      <section className="left-col">
        <h2>Album of the Week</h2>
        <AlbumCard album={demoAlbums[0]} />
        <hr />
        <h3>Discover</h3>
        <div className="album-grid">
          {demoAlbums.map(a => <AlbumCard key={a.id} album={a} />)}
        </div>
      </section>

      <aside className="right-col">
        <h3>Recent Reviews</h3>
        {demoReviews.map(r => <ReviewCard key={r.id} review={r} />)}
      </aside>
    </div>
  )
}
