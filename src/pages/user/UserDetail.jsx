import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import axios from 'axios';

export const UserDetail = () => {
  const navigation = useNavigation();
  const user = useLoaderData();

  // Memberikan loading state ketika data sedang di-load
  if (navigation.state === 'loading') {
    return <h1>Loading!</h1>;
  }

  // Memberikan error handling ketika user tidak ditemukan
  if (user.status == 'Error') {
    return <div>Error - {user.message}</div>;
  }

  return (
    <>
      <div className='flex gap-5'>
        <img src={user.foto} alt='foto user' className='h-48 rounded' />
        <div className='flex flex-col gap-2'>
          <h2 className='text-3xl font-bold'>{user.nama}</h2>
          <p>NIM : {user.nim}</p>
          <p>Divisi : {user.divisi}</p>
          <p>Email : {user.email}</p>
          <p>Angkatan : {user.angkatan}</p>
        </div>
      </div>
      <div className='mt-6 underline'>
        <Link to='..'>Kembali</Link>
      </div>
    </>
  );
};

export const userDetailLoader = async (nim) => {
  try {
    const response = await axios.get(`http://localhost:3002/v1/users/${nim}`);
    return response.data.data;
  } catch (error) {
    const err = error.response.data;
    return err;
  }
};
