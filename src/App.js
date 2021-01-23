import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' 
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import NavBar from './components/navBar.component';
import CreateUser from './components/create-user.component';
import CreateExercise from './components/create-exercise.component';
import EditExercise from './components/edit-exercise.component';
import ExerciseList from './components/exercises-list.component';

function App() {
  console.log('process.env.REACT_APP_BACKEND_URL', process.env.REACT_APP_BACKEND_URL)
  console.log('process.env.ATLAS_URI', process)
  console.log('process.env.ATLAS_URI', process.env)
  return (
    <div className="App">
      <BrowserRouter>
        <div className='container'>
          <NavBar />
          <br></br>
          <Switch>
            <Route path='/' component={ExerciseList} exact />
            <Route path='/create' component={CreateExercise} />
            <Route path='/edit/:id' component={EditExercise} />
            <Route path='/user' component={CreateUser} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
