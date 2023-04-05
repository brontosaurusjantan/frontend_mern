import React, {useState} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const AddUser = () => {
const [name, setName] = useState ("");
const [email, setEmail] = useState ("");
const [gender, setGender] = useState ("");
const navigate = useNavigate();

const saveUser = async(e) => {
    e.preventDefault();
    try {
        await axios.post("http://localhost:5000/users",{
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
    <div className="columns is-half">
        <div className="coulmn is-half">
            <form onSubmit={saveUser} >
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
                        <button type="submit" className="button is-success">save</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddUser
