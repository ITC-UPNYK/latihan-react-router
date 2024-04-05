import { NavLink, Outlet } from 'react-router-dom';

export const RootLayouts = () => {
  return (
    <div className='h-screen flex flex-col'>
      <header>
        <nav className='flex items-center justify-between px-4 pt-3'>
          <h1 className='text-4xl font-bold'>ITC</h1>
          <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='about'>About</NavLink>
            <NavLink to='help'>Help</NavLink>
            <NavLink to='users'>Users</NavLink>
            <NavLink to='login'>Login</NavLink>
          </div>
        </nav>
      </header>
      <main className='p-4 flex-1'>
        <div className='h-full bg-teal-800 rounded-lg text-white px-5 py-4'>
          <Outlet />
        </div>
      </main>
    </div>
  );
};
