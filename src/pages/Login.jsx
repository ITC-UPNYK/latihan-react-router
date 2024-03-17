import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    if (username == 'haikal' && password == '12345') {
      navigate('/', { replace: true });
    } else {
      console.log('Username atau password salah');
    }
  };

  return (
    <div className='p-5'>
      <form onSubmit={submitHandler} className='flex flex-col gap-2'>
        <input
          onChange={(e) => setUsername(e.target.value)}
          className='p-2 border border-black'
          type='text'
          placeholder='Username'
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className='p-2 border border-black'
          type='text'
          placeholder='Password'
        />
        <button className='bg-red-300 p-2'>Login</button>
      </form>
    </div>
  );
};

export default Login;
