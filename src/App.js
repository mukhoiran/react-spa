import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

function Home(){
  return <h2>Home Page</h2>
}

function ListView(){
  return (
    <div>
      <h2>List Users</h2>
      <ul>
        <li><Link to='user/messi'>Messi</Link></li>
        <li><Link to='user/suarez'>Suarez</Link></li>
      </ul>
    </div>
  )

}

function DetailView({ match }){
  return <h2>This is page {match.params.name} </h2>
}

function NoMatch(){
  return <h2>404 Page Not Found</h2>
}

function App() {
  return (
    <BrowserRouter>
      <div>

        <nav>
          <li><Link to='/'> Name </Link></li>
          <li><Link to='/users'> User </Link></li>
        </nav>

        <main>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/users' exact component={ListView} />
            <Route path='/user/:name' exact component={DetailView} />
            <Route exact component={NoMatch} /> {/* place this at the end */}
          </Switch>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;
