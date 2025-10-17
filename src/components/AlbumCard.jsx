import React from 'react'

export default function AlbumCard({ album }) {
  return (
    <article className="album-card">
      <div className="cover" style={{backgroundImage: `url(${album.cover})`}} />
      <div className="album-body">
        <h4 className="album-title">{album.title}</h4>
        <p className="album-artist">{album.artist} · {album.year}</p>
        <p className="album-blurb">{album.blurb}</p>
        <div className="album-cta">
          <button className="btn primary">Add to Library</button>
          <button className="btn outline">Write Review</button>
        </div>
      </div>
    </article>
  )
}
