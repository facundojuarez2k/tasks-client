import React from 'react';
import './styles.css';
import Container from 'react-bootstrap/Container';
import Tasks from '../Tasks';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Container>
          <Switch>
            <Route path="/tasks">
              <Tasks />
            </Route>
            <Route path="/">
              <div>
                <a href="/tasks">Tareas</a>
              </div>
            </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;