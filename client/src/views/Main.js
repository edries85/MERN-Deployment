import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Router } from '@reach/router';


import PetForm from '../components/PetForm';
import PetDashboard from '../components/PetDashboard';
import PetDetail from '../components/PetDetail';
import PetEdit from '../components/PetEdit';



export default () => {
    const [animals, setAnimals] = useState([]);
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/pet")
            .then(res=>setAnimals(res.data)) 
            .catch(err => console.log('Error:',err))        
    }, [])

    
    return (
        <div>
            <Router>
                <PetForm path = '/pets/new'/>
                <PetDashboard path= '/pets' animals={animals}/>
                <PetDetail path = '/pets/:id'/>
                <PetEdit path= '/pets/:id/edit/'/>
            </Router>
        </div>
    )
}
