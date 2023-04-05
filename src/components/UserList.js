import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const UserList = () => {
    const [users, setUser] = useState([]);

    useEffect(() =>{
        getUsers();
    },[]);

    const getUsers = async() =>{
        const response = await axios.get("http://localhost:5000/users");
        setUser(response.data);
    };

  return (
    <div className="columns">
        <div className="column is-half">
            <table className="table is-stripped is-fullwidth mt-5">
                <thead>
                    <tr>
                        <th>no</th>
                        <th>name</th>
                        <th>email</th>
                        <th>gender</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((users, index) => (
                        <tr key={users._id}>
                        <td>{index + 1}</td>
                        <td>{users.name}</td>
                        <td>{users.email}</td>
                        <td>{users.gender}</td>
                        <td>
                            <button className="button is-info is-small">edit</button>
                            <button className="button is-danger is-small">delete</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default UserList
