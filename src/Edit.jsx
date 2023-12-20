import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from './userReducer';


const Edit = () => {
    const {id} = useParams();
    const users = useSelector((state)=>state.users);
    const existingUser = users.filter((f)=>f.id == id);
    const {name,email} = existingUser[0];
    const [upname,setName] = useState(name)
    const [upemail,setEmail] = useState(email)
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleUpdate=(e)=>{
        e.preventDefault();
        dispatch(updateUser({
            id: id,
            name:upname,
            email:upemail
        }))
        navigate("/")
    }
  return (
    
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <h3>Update</h3>
                <form onSubmit={handleUpdate}>
                    <div>
                        <label htmlFor="home">Name</label>
                        <input type="text" name="name" className='from-control' placeholder='enter name'
                        value={upname} onChange={(e)=>setName(e.target.value)}/>
                        
                    </div>
                    <div>
                        <label htmlFor="home">Email</label>
                        <input type="text" name="email" className='from-control' placeholder='enter email'
                        value={upemail} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div>
                       <br/>
                       <button className='btn btn-info'>update</button>
                    </div>
                </form>
            </div>
        </div>
      )
    }
  


export default Edit
