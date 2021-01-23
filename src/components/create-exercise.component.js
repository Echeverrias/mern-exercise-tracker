import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

const CreateExercise = () => {

    //const [exercise, setExercise] = useState({});
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState('');
    const [date, setDate] = useState('');
    
    const backendUrl = process.env.REACT_APP_BACKEND_URL

    useEffect(() => {
        axios.get(`${backendUrl}/users`)
            .then(res => setUsers(res.data))
            .catch(err => console.log(`Error: ${err}`))
    }, [])
    
    const handleChangeUsername = e => setUsername(e.target.value);

    const handleChangeDescription = e => setDescription(e.target.value);

    const handleChangeDuration = e => setDuration(e.target.value);

    const handleChangeDate = date => setDate(date);

    const handleSubmit = (e) => {
        e.preventDefault();
        const exercise = {username, description, duration, date};
        console.log(exercise)
        axios.post(`${backendUrl}/exercises/add`, exercise)
            .then(res => console.log(res.data))
            .catch(err => console.log(`Error: ${err}`))
        //window.location = '/'
    }

    return (
        <div className='createExercise'>
            <h3>Create New Exercise</h3>
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
                        value="Create exercise"
                        className='btn btn-primary'
                    />
                </div>
            </form>
        </div>
    )
}

export default CreateExercise;