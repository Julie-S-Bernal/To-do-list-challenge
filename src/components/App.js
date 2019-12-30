import React, {Component, useContext, useReducer} from 'react';
import { Route } from 'react-router-dom'
import { createGlobalStyle } from "styled-components";
import TodosContext from './context';


import ToDoList from  './ToDo/ToDoList';


const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  body {
    font-family: 'Notable', sans-serif;
  }
`

const App = () => {
  const initialState = useContext(TodosContext)
  const [state] = useReducer(initialState)
    return(
      <>
        <GlobalStyles />
        <TodosContext.Provider value={{state}}>
          <Route exact path="/" component={ToDoList} />
        </TodosContext.Provider>
      </>
    )
  }

export default App;
