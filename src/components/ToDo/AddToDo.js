import React, { useContext } from 'react'; //in order to consume context need to import useContext from React, don't forget!
import { Container, Col, Row } from 'styled-bootstrap-grid';
import styled from 'styled-components';

import TodosContext from "../context"; //the actual data that will be consumed

export default function AddToDo() {
    const { state, dispatch } = useContext(TodosContext);
  return(
    <>
      <form>
        <input placeholder='Title of to do' />
        <input placeholder='To do content /'>
        <input type='submit'/>
      </form>
    </>
  )
}
