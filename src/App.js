import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/view/Home';
import About from './components/view/About';
import Shining from './components/view/Shining';
import CardAnimated from './components/view/CardAnimated';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Shining' element={<Shining />} />
        <Route path='/cardanimated' element={<CardAnimated/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
