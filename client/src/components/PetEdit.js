import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';


export default props => {
    const { id } = props;
    const [ name, setName ] = useState();
    const [ type, setType ] = useState();
    const [ description, setDescription ] = useState();
    const [ skill1, setSkill1 ] = useState();
    const [ skill2, setSkill2 ] = useState();
    const [ skill3, setSkill3 ] = useState();
    const [ errors, setErrors ] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8000/api/pet/' + id)
        .then(res => {
            setName(res.data.name);
            setType(res.data.type);
            setDescription(res.data.description);
            setSkill1(res.data.skill1);
            setSkill2(res.data.skill2);
            setSkill3(res.data.skill3);
        })
        }, [])


        const updatePet = e => {

            e.preventDefault();
            axios.put('http://localhost:8000/api/pet/' + id, {
                name,
                type,
                description,
                skill1,
                skill2,
                skill3
            })
            .then(res => {
                if (res.data.errors) {
                    setErrors(res.data.errors);
                }
                else {
                    console.log(res);
                    navigate('/pets')
                }
            })
            .catch(err =>console.log(err))
                
        }

    return(
        <div className= 'container'>
            <div className= 'jumbotron'style={{backgroundColor:'#0524'}}>
            <h1>Pet Shelter</h1>
            <h2>Edit this Pet</h2>

            <form onSubmit={updatePet}>
                <p>
                    <label>Name:</label><br/>
                    <input type="text" onChange = {(e)=>setName(e.target.value)} />
                    <span> { errors.name ? errors.name.message : "" } </span>
                </p> 
                <p>
                    <label>Type:</label><br/>
                    <input type="text" onChange = {(e)=>setType(e.target.value)} />
                    <span> { errors.name ? errors.name.message : "" } </span>
                </p>
                <p>
                    <label>Description:</label><br/>
                    <input type="text" onChange = {(e)=>setDescription(e.target.value)} />
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
                    <input type="submit" value='Edit Pet Info'/> <Link to = '/pets'><input type = 'submit' value = 'Cancel' /></Link>
                
            </form>

            </div>
        </div>
    )


}