import React from 'react'

const MapJoke = ({ data }) => {
  if (!data) return (
    <div className="loading-state">
      <div className="spinner" />
      Loading joke...
    </div>
  );

  const jokesArray = Array.isArray(data) ? data : [data];

  return (
    <div>
      {jokesArray.map((joke, idx) => (
        <div key={joke.id || idx} className="random-joke-card">
          <p>{joke.content}</p>
          <span className="category-tag">
            🎭 {joke.categories?.join(', ') || 'Random'}
          </span>
        </div>
      ))}
    </div>
  );
}

export default MapJoke
