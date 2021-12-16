import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import TimerProvider from "./utils/TimerProvider";
import DocumentationView from "./views/DocumentationView";
import TimersView from "./views/TimersView";
import AddView from "./views/AddView";

const Container = styled.div`
  background: #f0f6fb;
  height: 100vh;
  overflow: auto;
`;

function App() {
  return (
    <TimerProvider>
        <Container>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Timers</Link>
              </li>
              <li>
                <Link to="/docs">Documentation</Link>
              </li>
              <li>
                <Link to="/add">Add</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/docs">
              <DocumentationView />
            </Route>
            <Route path="/add">
              <AddView/>
            </Route>
            <Route path="/">
              <TimersView/>
            </Route>
          </Switch>
        </Router>
      </Container>
    </TimerProvider>
    
  );
}

export default App;