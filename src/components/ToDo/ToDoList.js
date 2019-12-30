import React, { useContext } from "react"; //in order to consume context need to import useContext from React, don't forget!
import { Container, Col, Row } from 'styled-bootstrap-grid';

import TodosContext from "../context"; //the actual data that will be consumed


export default function TodoList() {
    const { state, dispatch } = useContext(TodosContext);
  return(
    <Container fluid> 
      <Row>
        <Col col={2} />
        <Col col={6}>
          <h1>To Do List</h1>
          { state.todos.map(todo => (
            <li key={todo.id}>
              <span>
                {todo.name}
              </span>
              <span>
                {todo.description}
              </span>
            {/* // use a date created */}
            </li>
          ))}
        </Col>
        <Col size={2} />
      </Row>
    </Container>
  )
}
