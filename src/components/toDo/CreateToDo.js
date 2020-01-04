import React, { useContext, useState } from 'react';
 //in order to consume context need to import useContext from React, don't forget!
import { Container, Col, Row } from 'styled-bootstrap-grid';
import styled from 'styled-components';

import TodosContext from "../context"; //the actual data that will be consumed

const CreateToDo = () => {
    // const { createTodo, setTodo } = useState([]);
    // const { state, dispatch } = useContext(TodosContext);
  return(
    <>
      <form>
        <input placeholder='Title of to do'  />
        <input placeholder='To do content '/>
        <input type='submit'/>
      </form>
    </>
  )
}
export default CreateToDo;
