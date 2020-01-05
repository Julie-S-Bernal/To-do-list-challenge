import React, { useContext, useState } from 'react';
import { Container, Col, Row } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import { createToDo } from '../actions/createToDo';


const Spacing= styled.div`
  margin: 10px;
`;

const CreateToDo = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  //may need an id

    const dispatch= useDispatch();
    const ACTION_CREATE_TO_DO = (toDo) => dispatch(createToDo(toDo))

    const createNewToDo = async(e) => {
      console.log('i am here')
      e.preventDefault();
      let toDo = {
        name,
        creationDate: moment().toDate(),
        description,
      }
      debugger;
      await ACTION_CREATE_TO_DO(toDo)
    }


  return(
    <>
      <form onSubmit={createNewToDo}>
      <input
        type='text'
        className='input'
        // value={name}
        placeholder='Add a new task'
        onChange={e => setName(e.target.value)}
      />
        <Spacing />
        <input
          type='text'
          className='input'
          // value={description}
          placeholder='Add a description'
          onChange={e => setDescription(e.target.value)}
        />
        <Spacing />
        <input type='submit'/>
      </form>
    </>
  )
}
export default CreateToDo;
