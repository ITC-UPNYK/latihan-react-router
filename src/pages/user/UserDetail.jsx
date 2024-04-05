import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const UserDetail = () => {
    const { nim } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://localhost:3002/v1/users/${nim}`);
                setUser(response.data.data);
            } catch (error) {
                console.log(error.message);
            }
        };

        fetchUser();
    }, [nim]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="user-detail">
            <h2 className='text-3xl font-bold'>{user.nama}</h2>
            <p>NIM : {user.nim}</p>
            <p>Divisi : {user.divisi}</p>
            <p>Email : {user.email}</p>
            <p>Angkatan : {user.angkatan}</p>
            <img src={user.foto} alt="" />
        </div>
    );
};