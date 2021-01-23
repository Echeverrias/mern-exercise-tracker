import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Exercise from './exercise.component';
import axios from 'axios';

const ExercisesList = () => {

    const [exercises, setExercises] = useState(null);
    
    const backendUrl = process.env.REACT_APP_BACKEND_URL

    useEffect(() => {
        axios.get(`${backendUrl}/exercises`)
            .then(res => setExercises(res.data))
            .catch(err => console.log(`Error: ${err}`))
    }, [])

    const handleDeleteExercise = (id) => {
        console.log('delete: ', id);
        axios.delete(`${backendUrl}/exercises/${id}`)
            .then(res => {
                console.log(res.data)
                setExercises(exercises.filter(exercise => exercise._id !== id))
            })
            .catch(err => console.log(`Error: ${err}`))
    }

    return (
        <div className='exercisesList'>
            <h3>Exercises</h3>
            {
                exercises?
                    <ul>
                        {exercises.map(exercise => 
                            <li className='list-unstyled' key={exercise._id}>
                                <Exercise 
                                    exercise={exercise}
                                    handleDeleteExercise={handleDeleteExercise}
                                />
                                <br></br>    
                            </li>
                        )}
                    </ul>:
                    <div>Loading...</div>
            }
        </div>
    )
}

export default ExercisesList;