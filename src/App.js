import React  from 'react';
import "./App.css";
import Sidebar from './sidebar';
import Chat from './Chat';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from "./login"
import { UseStateValue } from './StateProvider';

function App() {
  const[ { user }, dispatch] = UseStateValue();

  return (
    <div className="App">

      {!user ? (
        <Login />
      ) : (
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
      )
    }
    </div>
  );
}

export default App;
