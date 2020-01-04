import React, {Component, useContext, useReducer} from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createGlobalStyle } from "styled-components";
import { BaseCSS } from 'styled-bootstrap-grid';

import store from './store/store';
import ToDoList from  './toDo/ToDoList';
import LandingPage from './userAuthentication/LandingPage';
import LoginForm from './userAuthentication/LoginForm';
import RegisterForm from './userAuthentication/RegisterForm';


//TODO: put in its own file
const GlobalStyles = createGlobalStyle`
  body {
  font-family: 'Roboto', sans-serif;
  };
  h1 {
    font-size: 2.6rem;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 0.05em;
    border-bottom: 2px solid;
    color: #9485d4;
    text-transform: uppercase;
  }
  h3 {
    font-size: 1.4rem;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 0.05em;
    color: #9485d4;
  }

  h4 {
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    color: #ffffff;
    margin-bottom: 5px;
    font-weight: normal;
  };
  span {
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    color: #cec8e8;
  }
  button {
    border: solid 2px #6d658f;
    border-radius: 3px;
    cursor: pointer;
    color: #6d658f;
    background-color: transparent;
    padding: 10px;
    text-transform: uppercase;
  }
  input[type="submit"] {
    border: solid 2px #6d658f;
    border-radius: 3px;
    cursor: pointer;
    color: #6d658f;
    background-color: transparent;
    padding: 5px;
    text-transform: uppercase;
  }
  ul {
    margin-block-start:0.5em;
    margin-block-start:0.5em;
  }
`

const App = () => {
  // const initialState = useContext(TodosContext)
  // const [state, dispatch] = useReducer(todosReducer, initialState)
    return(
      <>
        <GlobalStyles />
        <BaseCSS />
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/login" component={LoginForm} />
              <Route exact path="/register" component={RegisterForm} />
              {/* // Remember to use :username after todolist has a nice to have */}
              <Route exact path="/to-do-list" component={ToDoList} />
            </Switch>
           </Router>
          </Provider>
        </>
      )
  }

export default App;
