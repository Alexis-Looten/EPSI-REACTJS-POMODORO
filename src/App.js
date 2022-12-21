import './App.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
