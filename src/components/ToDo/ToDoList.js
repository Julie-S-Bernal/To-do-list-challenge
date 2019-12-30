import React, { useContext } from 'react'; //in order to consume context need to import useContext from React, don't forget!
import { Container, Col, Row } from 'styled-bootstrap-grid';
import styled from 'styled-components';

import TodosContext from "../context"; //the actual data that will be consumed

const StyledToDoListContainer= styled.div`
  align-items: center;
  border-radius: 5px;
  background: #6d658f;
  width: 100%;
  padding: 40px;
  text-decoration: none;
  box-shadow: -20px -20px 0px 0px rgba(100,100,100, 0.1);
  `;

const Spacing= styled.div`
  margin: 10px;
  background-color: red;
`;

const Separator = styled.div`
  background-color: #9485d4;
  width: 100%;
  margin-top: 10px;
  height: 1px;
`

export default function TodoList() {
    const { state, dispatch } = useContext(TodosContext);
  return(
    <Container >
      <Row>
        <Col col={2} />
        <Col col={6}>
        <Row>
          <StyledToDoListContainer>
            <Col col={12}>
            <h1>To Do List</h1>
            <Spacing />
            </Col>
            <Col col={12}>
            { state.todos.map(todo => (
            <>
              <li style={{listStyleType: 'none'}} key={todo.id}>
                <h4>
                  {todo.name}
                </h4>
                <span>
                  {todo.description}
                </span>
                <Separator />
                <Spacing />
              {/* // use a date created */}
              </li>
              </>
            ))}
            </Col>
          </StyledToDoListContainer>
          </Row>
        </Col>
        <Col size={2} />
      </Row>
    </Container>
  )
}
