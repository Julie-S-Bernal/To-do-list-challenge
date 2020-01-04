import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Col, Row } from 'styled-bootstrap-grid';

import firebaseConfig from '../firebaseConfig'


// TODO extract to own const to avoid repetition or merge the two file and render depending type
const FormWrapper=styled.div`
  max-width: 30%;
  min-width: 300px;
  padding: 50px 30px 50px 30px;
  margin: 50px auto;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 15px 35px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.07);
  background: rgba(255,255,255,0.4);
  border-bottom: 1px solid rgba(225,225,225,0.5);
  z-index: 1000;

  .formInput{
    position: relative;
    padding: 12px 0px 5px 0;
    width: 100%;
    outline: 0;
    border: 0;
    box-shadow: 0 1px 0 0 #e5e5e5;
    transition: box-shadow 150ms ease-out;

    &:focus {
      box-shadow: 0 2px 0 0 blue;
    }
  }
  .button {
    width: 100%;
    color: #8f2fde;
    border: solid 1px #8f2fde;
  }
`;

const ButtonWrapper=styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`


const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const login = async(event) => {
    event.preventDefault();
    let response = await firebaseConfig.login(email, password);
    if(response.hasOwnProperty('message')){
      setLoginError(true)
    }
    if(response.hasOwnProperty('user')){
      props.history.push('/to-do-list')
    }
  }

  return (
    <Container>
      <Row>
        <Col col={12}>
          <FormWrapper>
            <form onSubmit={login}>
              <h3 style={{textAlign: 'center'}}>Sign into your account</h3>
              <label htmlFor='email'>Email: </label>
              <input className='formInput' type="email" name='email' onChange={(event) => setEmail(event.target.value)} ></input>
              <label htmlFor='email'>Password: </label>
              <input className='formInput'type="password" name='password' onChange={(event) => setPassword(event.target.value)} ></input>
              <ButtonWrapper>
                <input className='button' type='submit' value='login' />
              </ButtonWrapper>
              {loginError && <span> Something went wrong! (╥_╥) </span>}
            </form>
          </FormWrapper>
        </Col>
      </Row>
    </Container>
  )
}
export default withRouter(Login);
