import React, {useState} from 'react';
import axios from 'axios';

const CreateUser = () => {
    
    const [username, setUsername] = useState('');

    const backendUrl = process.env.REACT_APP_BACKEND_URL
    
    const handleChangeUsername = (e) => setUsername(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {username}
        axios.post(`${backendUrl}/users/add`, user)
            .then(res => console.log(res.data))
            .catch(err => console.log(`Error: ${err}`))
        window.location = '/'
    } 

    return (
        <div className='createUser'>
            <h3>Create User</h3>
            <form
                className='form'
                onSubmit={handleSubmit}
            >
                <div className='form-group'>
                    <label htmlFor='usernameInput'>Username:</label>
                    <input
                        className='form-control'
                        type='text'
                        name='usernameInput'
                        value={username}
                        onChange={handleChangeUsername}
                    />
                </div>
                <input
                    value='Create user'
                    type='submit'
                    className='btn btn-primary'
                />
            </form>
        </div>
    )
}

export default CreateUser;