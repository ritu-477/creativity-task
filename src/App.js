import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/view/Home';
import About from './components/view/About';
import Shining from './components/view/Shining';
import CardsAnimated from './components/view/CardsAnimated';
import TiltAnimation from './components/view/TiltAnimation';
import CircularMenu from './components/view/CircularMenu';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Shining' element={<Shining />} />
        <Route path='/cardsanimated' element={<CardsAnimated/>} />
        <Route path='/tilt-animation' element={<TiltAnimation/>} />
        <Route path='/circular-menu' element={<CircularMenu/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
