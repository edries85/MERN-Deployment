import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';

export default props => {
    const [ pet, setPet ] = useState ({})

    useEffect(() => {
        axios.get("http://localhost:8000/api/pet/" + props.id)
            .then(res => setPet({
                ...res.data
            }))
    }, [])

    const adoptPet = (petId) => {
        axios.delete('http://localhost:8000/api/pet/' + petId)
            .then(res => {
                navigate("/pets")
            })
    }



    return(
        <div className= 'jumbotron' style={{backgroundColor:'#0524'}}>
            <h1>Pet Shelter</h1>
            <Link to = '/pets' className='btn btn-primary'> Home </Link>
            <h2>Details About {pet.name}</h2>
            <p>Description: {pet.description}</p>
            
            <h3>Skills:</h3>
            <p>{pet.skill1}</p>
            <p>{pet.skill2}</p>
            <p>{pet.skill3}</p>

            <button onClick = { (e) => {adoptPet(pet._id)}} className='btn btn-primary' style={{backgroundColor:''}}> Adopt this pet! </button>
            


        </div>


    )

}
