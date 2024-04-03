import { NavLink, Outlet } from "react-router-dom"
import "./HelpLayout.css";

export const HelpLayout = () => {
  return (
    <div className="help-layout h-screen bg-indigo-600 text-white">
        <h2 className="text-4xl font-bold mb-4">Website Help</h2>
        <p className="text-lg mb-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, corporis.</p>
        
        <nav className="flex justify-center gap-4">
            <NavLink to='faq' className='p-5 border border-solid rounded'>View the FAQ</NavLink>
            <NavLink to='contact' className='p-5 border border-solid rounded'>Contact Us</NavLink>
        </nav>

        <div className="mt-5">
            <Outlet />
        </div>
    </div>
  )
}
