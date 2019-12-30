import React, {Component, useContext, useReducer} from 'react';
import { Route } from 'react-router-dom'
import { createGlobalStyle } from "styled-components";

import TodosContext from './context';
import todosReducer from './reducer';
import ToDoList from  './ToDo/ToDoList';


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
  const initialState = useContext(TodosContext)
  const [state, dispatch] = useReducer(todosReducer, initialState)
    return(
      <>
        <GlobalStyles />
          <Route exact path="/">
            <TodosContext.Provider value={{state, dispatch}}>
              <ToDoList />
            </TodosContext.Provider>
        </Route>
      </>
    )
  }

export default App;
