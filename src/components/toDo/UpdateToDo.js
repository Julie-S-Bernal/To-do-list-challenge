import React, { useContext, useState } from 'react';
import { Container, Col, Row } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import { createToDo } from '../actions/createToDo';
//Added in case per exercice but I technically already have an id  because of the type of database I have
import uuid from 'uuid/v4';

const Spacing= styled.div`
  margin: 10px;
`;

const CreateToDo = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

    const dispatch= useDispatch();
    const ACTION_UPDATE_TO_DO = (toDo) => dispatch(updateToDo(toDo))

    const updateToDo = async(e) => {
      e.preventDefault();
      let toDo = {
        name,
        creationDate: moment().toDate(),
        description,
      }
      debugger;
      await ACTION_UPDATE_TO_DO(toDo)
    }


  return(
    <>
      <form onSubmit={updateToDo}>
        <h3>Updata To Do</h3>
        <input
          type='text'
          className='input'
          // value={name}
          //place previous value here
          placeholder=''
          onChange={e => setName(e.target.value)}
        />
        <Spacing />
        <input
          type='text'
          className='input'
          // value={description}
           //place previous value here
          placeholder=''
          onChange={e => setDescription(e.target.value)}
        />
        <Spacing />
        <input type='submit'/>
      </form>
    </>
  )
}
export default CreateToDo;
