import React, {Component, useContext, useReducer} from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createGlobalStyle } from "styled-components";

import store from './store/store';
import ToDoList from  './toDo/ToDoList';
import LandingPage from './userAuthentication/LandingPage';
import LoginForm from './userAuthentication/LoginForm';
import RegisterForm from './userAuthentication/RegisterForm';


const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  body {
    font-family: 'Roboto', sans-serif;
  };
  h1 {
    font-size: 2.6rem;
    letter-spacing: 0.05em;
    border-bottom: 2px solid;
    color: #9485d4;
  }
  h4 {
    font-size: 1rem;
    color: #ffffff;
    margin-bottom: 5px;
    font-weight: normal;
  };
  span {
    font-size: 1rem;
    color: #cec8e8;
  }
`

const App = () => {
  // const initialState = useContext(TodosContext)
  // const [state, dispatch] = useReducer(todosReducer, initialState)
    return(
      <>
        <GlobalStyles />
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/login" component={LoginForm} />
              <Route exact path="/register" component={RegisterForm} />
              {/* // Remember to use :username after todolist has a nice to have */}
              <Route exact path="/ToDoList" component={ToDoList} />
            </Switch>
           </Router>
          </Provider>
        </>
      )
  }

export default App;
