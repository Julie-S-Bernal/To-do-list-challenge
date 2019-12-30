import React, {Component, useContext, useReducer} from 'react';
import { Route } from 'react-router-dom'
import { createGlobalStyle } from "styled-components";

import TodosContext from './context';
import todosReducer from './reducer';
import ToDoList from  './ToDo/ToDoList';


const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  body {
    font-family: 'Notable', sans-serif;
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
