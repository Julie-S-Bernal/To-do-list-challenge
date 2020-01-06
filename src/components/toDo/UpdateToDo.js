import React, { useEffect, useState } from 'react';
import { Container, Col, Row } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import { updateToDo } from '../actions/updateToDo';
//Added in case per exercice but I technically already have an id  because of the type of database I have
import uuid from 'uuid/v4';

const Spacing= styled.div`
  margin: 10px;
`;

const UpdateToDo = () => {
    const [name, setName] = useState("");
  const [description, setDescription] = useState("");

    // const dispatch= useDispatch();
    // const ACTION_UPDATE_TO_DO = (toDoId, toDo) => dispatch(updateToDo(toDoId, toDo));

    // const updateSelectedToDo = async(e) => {
    //   e.preventDefault();
    //   let toDo = {
    //     id: toDoId,
    //     creationDate: moment().toDate(),
    //     description,
    //   }
    //   await ACTION_UPDATE_TO_DO(toDoId, toDo)
    // }

  return(
    <>
      <form onSubmit={updateSelectedToDo}>
        <h3>Update To Do</h3>
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
export default UpdateToDo;
