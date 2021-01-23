import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useParams} from 'react-router-dom';
import DatePicker from 'react-datepicker';
import axios from 'axios'
;
const EditExercise = () => {

    const {id} = useParams();

     //const [exercise, setExercise] = useState({});
     const [users, setUsers] = useState([]);
     const [username, setUsername] = useState('');
     const [description, setDescription] = useState('');
     const [duration, setDuration] = useState(0);
     const [date, setDate] = useState(null);

     const backendUrl = process.env.REACT_APP_BACKEND_URL

     useEffect(() => {
        axios.get(`${backendUrl}/users`)
            .then(res => setUsers(res.data))
            .catch(err => console.log(`Error: ${err}`));

        axios.get(`${backendUrl}/exercises/${id}`)
            .then(res => {
                setUsername(res.data.username);
                setDescription(res.data.description);
                setDuration(res.data.duration);
                setDate(new Date(res.data.date));
            })
            .catch(err => console.log(`Error: ${err}`));

    }, [])
    
 
     const handleChangeUsername = e => setUsername(e.target.value);
 
     const handleChangeDescription = e => setDescription(e.target.value);
 
     const handleChangeDuration = e => setDuration(e.target.value);
 
     const handleChangeDate = date => setDate(date);
 
     const handleSubmit = (e) => {
         e.preventDefault();
         const exercise = {username, description, duration, date};
         axios.post(`${backendUrl}/exercises/update/${id}`, exercise)
             .then(res => console.log(res.data))
             .catch(err => console.log(`Error: ${err}`))
        //window.location = '/'
     }
 
     return (
            <div className='createExercise'>
                <h3>Edit Exercise</h3>
                {
                    date? 
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor='userInput'>Username:</label>
                                <select 
                                    name="userInput"
                                    required
                                    className="form-control"
                                    value={username}
                                    onChange={handleChangeUsername}
                                >
                                    {users.map(user => 
                                        <option
                                            key={user._id}
                                            value={user.username}
                                        >
                                            {user.username}
                                        </option>
                                            
                                    )};    
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor='descriptionInput'>Description:</label>
                                <input
                                    name="descriptionInput"
                                    required
                                    type='text'
                                    className="form-control"
                                    value={description}
                                    onChange={handleChangeDescription}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor='durationInput'>Duration (in minutes):</label>
                                <input
                                    name="durationInput"
                                    required
                                    type='number'
                                    className="form-control"
                                    value={duration}
                                    onChange={handleChangeDuration}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor='dateInput'>Date:</label>
                                <DatePicker
                                    selected={date}
                                    onChange={handleChangeDate}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type='submit'
                                    value="Update exercise"
                                    className='btn btn-primary'
                                />
                            </div>
                        </form>
                    :<div>Loading...</div>
                }
        </div>
     )
 }

export default EditExercise;