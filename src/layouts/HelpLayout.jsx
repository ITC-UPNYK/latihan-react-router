import { NavLink, Outlet } from 'react-router-dom';

export const HelpLayout = () => {
  return (
    <div>
      <h2 className='text-4xl font-bold mb-4'>Website Help</h2>
      <p className='text-lg mb-8'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque,
        corporis.
      </p>

      <nav className='flex justify-center gap-4'>
        <NavLink to='faq' className='help-nav'>
          View the FAQ
        </NavLink>
        <NavLink to='contact' className='help-nav'>
          Contact Us
        </NavLink>
      </nav>

      <div className='mt-5'>
        <Outlet />
      </div>
    </div>
  );
};
