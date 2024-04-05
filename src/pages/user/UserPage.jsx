import { Link, useLoaderData } from 'react-router-dom';
import axios from 'axios';

export const UserPage = () => {
  const users = useLoaderData();

  return (
    <div className='flex flex-col gap-3'>
      {users.map((user) => (
        <Link to={user.nim.toString()} key={user.id}>
          <div className='bg-white text-black rounded-lg shadow-md px-4 py-3 transition-all hover:bg-white hover:bg-opacity-90'>
            <p className='font-bold text-lg '>{user.nama}</p>
            <p>{user.nim}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export const usersLoader = async () => {
  try {
    const response = await axios.get('http://localhost:3002/v1/users');
    return response.data.data;
  } catch (error) {
    console.log(error.message);
  }
};
