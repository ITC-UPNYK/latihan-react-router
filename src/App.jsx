import { 
  createBrowserRouter, 
  Route, 
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import './App.css';
import Login from './pages/Login';
import { RootLayouts } from './layouts/RootLayouts';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayouts />}> 
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='login' element={<Login />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
