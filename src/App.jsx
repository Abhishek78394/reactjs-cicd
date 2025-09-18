import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>React + Vite Dummy Project</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            Count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          This is a dummy React application built with Vite and deployed on EC2 with Nginx
        </p>
        <div className="features">
          <h2>Features:</h2>
          <ul>
            <li>⚡ Lightning fast with Vite</li>
            <li>🚀 Deployed on AWS EC2</li>
            <li>🔧 Served with Nginx</li>
            <li>📱 Responsive design</li>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default App