import React, { useState, useEffect, useRef } from 'react';
import { Container, Col, Row } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import {useSelector, useDispatch } from 'react-redux';

import { getToDos } from '../actions/getToDos';
import{ formattedDate } from '../dateUtil';
import { deleteToDo} from '../actions/deleteToDo';

import Navigation from '../userAuthentication/Navigation';
import CreateToDo from './CreateToDo';
import UpdateToDo from './UpdateToDo';


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
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch()
  const GET_TO_DOS_ACTION = () => dispatch(getToDos())
  const DELETE_TO_DO_ACTION = (toDoId) => dispatch(deleteToDo(toDoId));

  const showUpdateForm = async(e) => {
    setShowModal(true);
  }

  const deleteSelectedToDo = async(toDoId) =>{
    setShowModal()
    await DELETE_TO_DO_ACTION(toDoId);
    GET_TO_DOS_ACTION()
}

  useEffect(() => {
    GET_TO_DOS_ACTION()
  },[])

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
              {
              !showModal ?
              <CreateToDo />
              :
              <UpdateToDo/>
              }
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
                <Col col={6}>
                <span>{todo.data.description}</span>
                </Col>
                <Col col={6}>
                  {/* TO DO replace with icon image to make it less heavy */}
                <button style={{borderColor:'white', color:'white'}} onClick={showUpdateForm}> update</button>
                <button style={{borderColor:'white', color:'white'}} onClick={() => deleteSelectedToDo(todo.id)}>Delete</button>
                </Col>
                <Col col={12}>
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
