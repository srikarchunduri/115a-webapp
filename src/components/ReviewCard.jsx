import React from 'react'

export default function ReviewCard({ review }) {
  return (
    <div className="review-card">
      <div className="review-meta">
        <div className="avatar neon-avatar">{review.user[0]}</div>
        <div>
          <div className="review-user">{review.user}</div>
          <div className="review-rating"> {review.rating}</div>
        </div>
      </div>
      <p className="review-text">{review.text}</p>
    </div>
  )
}
