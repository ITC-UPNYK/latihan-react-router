import { NavLink, Outlet } from "react-router-dom"

export const RootLayouts = () => {
  return (
    <div className='root-layouts'>
        <header>
          <nav className='flex items-center justify-between'>
            <h1 className='text-4xl font-bold'>ITC</h1>
            <div>
              <NavLink to='/'>Home</NavLink>
              <NavLink to='about'>About</NavLink>
              <NavLink to='login'>Login</NavLink>
            </div>
          </nav>
        </header>
        <main>
            <Outlet />
        </main>
    </div>
  )
}
