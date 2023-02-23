import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import UseRefCase from './UseRefCase/';
import UseRefToPersistState from './UseRefToPersistState/';
import UseRefOnElement from './UseRefOnElement/';

function App() {
  return (
    <div className="App">
      <div className="links">
        <Link to="/persist">Persist State</Link>
        <Link to="/case">Use Case</Link>
        <Link to="/element">HTML Element</Link>
      </div>
      <Routes>
        <Route path="/persist" element={<UseRefToPersistState />} />
        <Route path="/case" element={<UseRefCase />} />
        <Route path="/element" element={<UseRefOnElement />} />
      </Routes>
    </div>
  );
}

export default App;
