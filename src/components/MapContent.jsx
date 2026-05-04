import React from 'react'

const MapContent = ({ data }) => {
  if (!data) return (
    <div className="loading-state">
      <div className="spinner" />
      Loading jokes...
    </div>
  );

  return (
    <div className="jokes-grid">
      {data.map((joke) => (
        <div key={joke.id} className="joke-card">
          <p>{joke.content}</p>
          <span className="category-tag">
            🏷️ {joke.categories?.join(', ') || 'General'}
          </span>
        </div>
      ))}
    </div>
  )
}

export default MapContent
