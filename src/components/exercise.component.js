import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const Exercise = ({exercise, handleDeleteExercise}) => {

    return (
        <div className='exercise'>
            <div className='card'>
                <div className='card-body'>
                    <div className='card-title'><span className='font-weight-bold'>Username</span>: {exercise.username}</div>
                    <div className='card-title'><span className='font-weight-bold'>Description</span>:</div>
                    <div className='card-text'>{exercise.description}</div>
                    <div className='card-title'><span className='font-weight-bold'>Duration</span>: {exercise.duration} minutes</div>
                    <div className='card-title'><span className='font-weight-bold'>Date</span>: {exercise.date.substring(0,10)}</div>
                    <Link to={`/edit/${exercise._id}`}>Edit</Link> | <a href='#' onClick={() => handleDeleteExercise(exercise._id)}>Delete the exercise</a>
                </div>
            </div>
        </div>
    )
}

export default Exercise;