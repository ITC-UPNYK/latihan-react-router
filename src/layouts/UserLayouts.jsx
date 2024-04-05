import { Outlet } from 'react-router-dom';

export const UserLayouts = () => {
  return (
    <div>
      <h2 className='text-2xl font-bold'>Users</h2>
      <p className='text-lg'>Lorem ipsum dolor sit amet.</p>

      <div className='mt-4'>
        <Outlet />
      </div>
    </div>
  );
};
