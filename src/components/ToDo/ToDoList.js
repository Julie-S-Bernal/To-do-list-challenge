import React, { useContext } from "react"; //in order to consume context need to import useContext from React, don't forget!
import { Column, Row } from 'styled-bootstrap-components';

import TodosContext from "../context"; //the actual data that will be consumed


export default function TodoList() {
    const { state} = useContext(TodosContext);
  return(
    <Row>
      <Column size={2} />
      <Column size={6}>
        <h1>To Do List</h1>
        { state.todos.map(todo => (
          <li key={todo.id}>
            <span>
              {todo.name}
            </span>
            <span>
              {todo.name}
            </span>
          {/* // use a date created */}
          </li>
        ))}
      </Column>
      <Column size={2} />
     </Row>
  )
}
