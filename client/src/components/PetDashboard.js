import React, { useEffect, useState } from 'react';
import '../App.css';
import { Link } from '@reach/router';
import axios from 'axios';
import ButtonGroup from 'react-bootstrap/ButtonGroup'



export default props => {
    const [ animals, setAnimals ] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/pet')
            .then(res => setAnimals(res.data));
    }, [])

    return(
        <div className= 'container'>
            <div className= 'jumbotron' style={{backgroundColor:'#0524'}}>
                <h1>Pet Shelter</h1>
                <h2>These pets are looking for a home!</h2>
                <p>
                    <Link to= '/pets/new' className='btn btn-danger'> Add a pet to the Shelter</Link>
                </p>
                <center>
                    <div>
                    
                        <table className='table'>
                            <thead style={{backgroundColor:"blue",color:'white'}}>
                                <tr>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                    {animals.map ( pet =>
                                    <tr key= {pet._id}>
                                    <td>{pet.name}</td>
                                    <td>{pet.type}</td>
                                    <td> <Link to={'/pets/' + pet._id}> <input type= 'submit' value='Details' className='btn btn-primary'/></Link> <Link to = {"/pets/" + pet._id + '/edit'}><input type = 'submit'className='btn btn-success' value = 'Edit' /></Link> </td>
                                </tr>

                                    
                                    )}
                            </tbody>
                        </table>
                    </div>
                </center>
            </div> 
        </div>




    )

}




