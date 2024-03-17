import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import './App.css';
import Login from './pages/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <nav className='flex items-center justify-between'>
            <h1 className='text-4xl font-bold'>React Router</h1>
            <div>
              <NavLink to='/'>Home</NavLink>
              <NavLink to='about'>About</NavLink>
              <NavLink to='login'>Login</NavLink>
            </div>
          </nav>
        </header>

        <Routes>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
