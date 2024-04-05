import {Link, useLoaderData} from 'react-router-dom';
import axios from 'axios';

export const UserPage = () => {
    const users = useLoaderData();
    return (
        <div className="users">
            {users.map(user => (
                <Link to={user.nim.toString()} key={user.id}>
                    <div className='bg-black text-white rounded-lg shadow-md p-6 mb-4 mx-5'>
                        <p className='font-bold text-3xl hover:text-orange-600'>{user.nama}</p>
                        <p>{user.nim}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export const usersLoader = async () => {
    try {
        const response = await axios.get('http://localhost:3002/v1/users');
        return response.data.data;
    } catch (error) {
        console.log(error.message)
    }
}
