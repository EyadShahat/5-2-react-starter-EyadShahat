import './App.css'
import StudentCard from './components/StudentCard'

function App() {
  return (
    <div className="app">
      <header className="dashboard-header">
        <h1>Student Information Dashboard</h1>
        <p>View and manage student details</p>
      </header>

      <main className="dashboard-main">
        <div className="cards-container">
          <StudentCard name="Alice Johnson" id="101" department="Computer Science" />
          <StudentCard name="Bob Smith" id="102" department="Mathematics" />
        </div>
      </main>
    </div>
  )
}

export default App
