import React from 'react'

const MapBook = ({ data }) => {
  if (!data || data.length === 0) return (
    <div className="loading-state">
      <div className="spinner" />
      Loading books...
    </div>
  );

  const booksArray = Array.isArray(data) ? data : [data];

  return (
    <div className="books-grid">
      {booksArray.map((book, idx) => (
        <div key={book.id ? `${book.id}-${idx}` : idx} className="book-card">
          <div className="book-icon">📘</div>
          <h3>{book.volumeInfo?.title || 'Untitled'}</h3>
          {book.volumeInfo?.description
            ? <p>{book.volumeInfo.description}</p>
            : <p className="no-desc">No description available.</p>
          }
        </div>
      ))}
    </div>
  )
}

export default MapBook
