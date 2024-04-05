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
import { HelpLayout } from './layouts/HelpLayout';
import { Faq } from './pages/help/Faq';
import { Contact } from './pages/help/Contact';
import { UserLayouts } from './layouts/UserLayouts';
import { UserPage, usersLoader } from './pages/user/UserPage';
import { UserDetail } from './pages/user/UserDetail';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayouts />}> 
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='login' element={<Login />} />

      <Route path='help' element={<HelpLayout />}>
        <Route path='faq' element={<Faq />} />
        <Route path='contact' element={<Contact />}/>
      </Route>

      <Route path='users' element={<UserLayouts />} >
        <Route 
        index 
        element={<UserPage />} 
        loader={usersLoader}
        />

        <Route 
        path=':nim'
        element={<UserDetail />}
        />
      </Route>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
