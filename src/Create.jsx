import React, { useState } from 'react'
import { addUser } from './userReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'



const Create = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const users = useSelector((state)=>state.users);//get unique id
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const handleSubmit=(e)=>{
       e.preventDefault();
       //use reducer create action and call it frm hert
       dispatch(addUser({id: users[users.length - 1].id + 1, name,email}))
       navigate("/")
    }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <h3>ADD NEW USER</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="home">Name</label>
                    <input type="text" name="name" className='from-control' placeholder='enter name'
                    onChange={e => setName(e.target.value)}/>
                    
                </div>
                <div>
                    <label htmlFor="home">Email</label>
                    <input type="text" name="email" className='from-control' placeholder='enter email'
                    onChange={e => setEmail(e.target.value)}/>
                </div>
                <div>
                   <br/>
                   <button className='btn btn-info'>SUbmit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Create