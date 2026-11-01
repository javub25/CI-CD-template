import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="counter">
      <h1>Counter</h1>
      <p aria-live="polite" data-testid="count">
        {count}
      </p>
      <div className="actions">
        <button
          type="button"
          onClick={() => setCount((c) => Math.max(0, c - 1))}
          disabled={count === 0}
        >
          Decrement
        </button>
        <button type="button" onClick={() => setCount((c) => c + 1)}>
          Increment
        </button>
        <button type="button" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </main>
  )
}

export default App
