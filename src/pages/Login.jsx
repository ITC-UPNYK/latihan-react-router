import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    // Kalo username sama password bener, redirect ke halaman home
    if (username == 'haikal' && password == '12345') {
      // replace: true berfungsi agar user tidak bisa kembali ke halaman sebelumnya setelah ter-redirect
      navigate('/', { replace: true });
    } else {
      console.log('Username atau password salah');
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler} className='flex flex-col gap-2'>
        <div className='flex flex-col gap-0.5'>
          <label>Username</label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            className='p-2 border border-black rounded text-black'
            type='text'
            placeholder='Username'
          />
        </div>
        <div className='mt-2 flex flex-col gap-0.5'>
          <label>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className='p-2 border border-black rounded text-black'
            type='password'
            placeholder='Password'
          />
        </div>
        <button className='mt-4 p-2 border-2 border-white text-white rounded transition-all hover:bg-white hover:text-black'>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
