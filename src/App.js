import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Country from './Components/Country';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/country" element={<Country />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
