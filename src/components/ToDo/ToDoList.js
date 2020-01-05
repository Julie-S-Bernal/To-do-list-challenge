import React, { useContext, useEffect } from 'react';
import { Container, Col, Row } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import {useSelector, useDispatch } from 'react-redux';

import Navigation from '../userAuthentication/Navigation';
import CreateToDo from './CreateToDo';
import { getToDos } from '../actions/getToDos';
import{ formattedDate } from '../dateUtil';


const StyledToDoListContainer= styled.div`
  align-items: center;
  border-radius: 5px;
  background: #6d658f;
  width: 100%;
  padding: 40px;
  text-decoration: none;
  box-shadow: -20px -20px 0px 0px rgba(100,100,100, 0.1);
  margin-top: 80px;
  `;

//TO DO extract to own file to use around the app
const Spacing= styled.div`
  margin: 10px;
`;

const Separator = styled.div`
  background-color: #9485d4;
  width: 100%;
  margin-top: 10px;
  height: 1px;
`;


export default function TodoList() {
  const getToDosSelector = useSelector((state)=> state.getToDos)
  console.log(getToDosSelector)
  const dispatch = useDispatch()
  const GET_TO_DOS_ACTION = () => dispatch(getToDos())

     useEffect(() => {
      GET_TO_DOS_ACTION();
      // need to listen to change of state here
    },[]);
  return(
    <Container>
      <Row>
        <Col col={12}>
          <Navigation/>
        </Col>
      </Row>
      <Row>
        <Col col={2} hiddenXsDown={true}/>
        <Col col={8} xs={12}>
          <StyledToDoListContainer>
            <Col col={12}>
              <h1>To Do List</h1>
              <Spacing />
              <CreateToDo />
            </Col>
            <Col col={12}>
            { getToDosSelector && getToDosSelector.toDos.map(todo => (
            <>
              <Row>
                <Col col={6}>
                  <h4>{todo.data.title}</h4>
                </Col>
                <Col col={6}>
                  <h4>{formattedDate(todo.data.creationDate)}</h4>
                </Col>
                <Col col={12}>
                  <span>{todo.data.description}</span>
                  <Separator />
                </Col>
              </Row>
            </>
            ))}
            </Col>
          </StyledToDoListContainer>
        </Col>
        <Col col={2} hiddenXsDown={true} />
      </Row>
    </Container>
  )
}
