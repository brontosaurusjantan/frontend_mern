import React, {useEffect, useState} from 'react';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';


const EditUser = () => {
const [name, setName] = useState ("");
const [email, setEmail] = useState ("");
const [gender, setGender] = useState ("");
const navigate = useNavigate();
const {id} = useParams();

useEffect(() => {
    getUserById();
},[]);

const getUserById = async () => {

    const response = await axios.get(`http://localhost:5000/users/${id}`)
    setName(response.data.name);
    setEmail(response.data.email);
    setGender(response.data.gender);
}

const updateUser = async(e) => {
    e.preventDefault();
    try {
        await axios.patch(`http://localhost:5000/users/${id}`,{
            name,
            email,
            gender
        });
        navigate("/");
    }catch (error) {
            console.log(error)
        }

    }

  return (
    <div className="columns">
        <div className="coulmn is-half is-offset-one-quarter">
            <form onSubmit={updateUser} className="box">
            <div className="field">
                <label className="label">Name</label>
                <div className="control">
                    <input 
                    type="text" 
                    className="input" 
                    value={name}  
                    onChange={(e) => setName(e.target.value)}
                    placeholder="nama" 
                    />
                </div>
            </div>
            <div className="field">
                <label className="label">email</label>
                <div className="control">
                    <input type="text" 
                    className="input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email" 
                    />
                </div>
            </div>
            <div className="field">
                <label className="label">gender</label>
                <div className="control">
                    <div className="select is-fullwidth">
                        <select 
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        >
                            <option value="male">male</option>
                            <option value="female">female</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <button type="submit" className="button is-success">Update</button>
                </div>
            </div>
            </form>
        </div>
    </div>
  )
}

export default EditUser
