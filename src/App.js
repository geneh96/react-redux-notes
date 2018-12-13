import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import NoteDetails from './components/notes/NoteDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateNote from './components/notes/CreateNote';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Dashboard}></Route>
            <Route path='/note/:id' component={NoteDetails}></Route>}
            <Route path='/(login|signin)' component={SignIn}></Route>}
            <Route path='/(signup|register)/' component={SignUp}></Route>}
            <Route path='/newnote' component={CreateNote}></Route>}

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
