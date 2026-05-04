import ErrorBoundary from './components/ErrorBoundary.jsx'
import ReactJokes from './components/ReactJokes.jsx'
import GetRandomJoke from './components/GetRandomJoke.jsx'
import GetBook from './components/GetBooks.jsx'

function App() {
  return (
    <div className="app-wrapper">
      <header className="app-header">
        <h1>😂 Jokes & 📚 Books</h1>
        <p>Your daily dose of laughs and reads</p>
      </header>

      <ErrorBoundary>
        {/* Random Joke */}
        <section className="section">
          <h2 className="section-title">
            🎲 Random Joke <span className="badge badge-random">Featured</span>
          </h2>
          <GetRandomJoke />
        </section>

        <div className="divider" />

        {/* Science Jokes */}
        <section className="section">
          <h2 className="section-title">
            🔬 Science Jokes <span className="badge badge-jokes">10 Jokes</span>
          </h2>
          <ReactJokes />
        </section>

        <div className="divider" />

        {/* Books */}
        <section className="section">
          <h2 className="section-title">
            📖 Tech Books <span className="badge badge-books">Top Picks</span>
          </h2>
          <GetBook />
        </section>
      </ErrorBoundary>

      <footer className="app-footer">
        Built with React ⚡ Powered by FreeAPI
      </footer>
    </div>
  )
}

export default App
