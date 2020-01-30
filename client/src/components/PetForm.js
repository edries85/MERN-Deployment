import React, { useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';


export default () => {
    //keep track of what is being typed via useState hook
    const [name, setName] = useState(""); 
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [ errors, setErrors ] = useState({});
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new pet
        axios.post('http://localhost:8000/api/pet/', {
            name,
            type,
            description,
            skill1,
            skill2,
            skill3
        })
            .then(res=>{
                if (res.data.errors) {
                    setErrors(res.data.errors);
                }
                else {
                    console.log(res);
                    navigate('/pets')
                }
            })
            .catch(err=>console.log(err))
    }

    //onChange to update Pet info
    return (
        <div className='container'>
            <div className='jumbotron'style={{backgroundColor:'#0524'}}>
                <h1>Pet Shelter</h1>
                <h2>Know of a pet needing a home?</h2>
                <form onSubmit={onSubmitHandler}>
                    <p>
                        <label>Name:</label><br/>
                        <input type="text" onChange = {(e)=>setName(e.target.value)}/>
                        <span> { errors.name ? errors.name.message : "" } </span>
                    </p> 
                    <p>
                        <label>Type:</label><br/>
                        <input type="text" onChange = {(e)=>setType(e.target.value)}/>
                        <span> { errors.name ? errors.name.message : "" } </span>
                    </p>
                    <p>
                        <label>Description:</label><br/>
                        <input type="text" onChange = {(e)=>setDescription(e.target.value)}/>
                        <span> { errors.name ? errors.name.message : "" } </span>
                    </p>

                    <p>
                        <label>Skill1:</label><br/>
                        <input type="text" onChange = {(e)=>setSkill1(e.target.value)}/>
                    </p>

                    <p>
                        <label>Skill2:</label><br/>
                        <input type="text" onChange = {(e)=>setSkill2(e.target.value)}/>
                    </p>
                    <p>
                        <label>Skill3:</label><br/>
                        <input type="text" onChange = {(e)=>setSkill3(e.target.value)}/>
                    </p>
                        <input type="submit" value='Add Pet' className='btn btn-primary'/> <Link to = '/pets'><input type = 'submit' value = 'Cancel'className='btn btn-primary' style={{backgroundColor:'red'}} /></Link>
                    
                </form>
            </div>
        </div>
    )
}
