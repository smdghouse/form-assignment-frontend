import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Assignment from './pages/Home.jsx'
import EmptyAssignments from './components/emptyAssignment.jsx'
function App() {

  return (
    <>
     <Router>
        <Routes>
          <Route path="/" element={<Assignment />} />
          <Route path="/empty" element={<EmptyAssignments />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
