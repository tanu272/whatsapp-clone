import React  from 'react';
import "./App.css";
import Sidebar from './sidebar';
import Chat from './Chat';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">

      <div className="app__body">
        <Router>
        <Sidebar />

          <Switch>
            {/* Sidebar */}
            <Route path = "/rooms/:roomId">
              <Chat />
              {/* Main chat */}
            </Route>
            <Route path = "/">
              <Chat />
            </Route>
          </Switch>
          
        </Router>
      </div>
    </div>
  );
}

export default App;
