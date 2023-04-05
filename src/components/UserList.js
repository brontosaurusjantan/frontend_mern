import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const UserList = () => {
    const [users, setUser] = useState([]);

    useEffect(() =>{
        getUsers();
    },[]);

    const getUsers = async() =>{
        const response = await axios.get("http://localhost:5000/users");
        setUser(response.data);
    };

    const deleteUser = async(id) => {
        try {
            await axios.delete(`http://localhost:5000/users/${id}`);
            getUsers()
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className="columns">
        <div className="column is-half">
            <Link to="add" className="button is-success"> Add New </Link>
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
                            <Link 
                            to={`edit/${users._id}`} 
                            className="button is-info is-small">
                                edit
                            </Link>
                            <button 
                            onClick={()=> deleteUser(users._id)} 
                            className="button is-danger is-small">
                                delete
                            </button>
                        </td>
                    </tr>
                    ),console.log(users))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default UserList
