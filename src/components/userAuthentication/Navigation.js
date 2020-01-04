import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';


import firebaseConfig from '../firebaseConfig'

const NavContainer=styled.div`
`;

// Rename this component to a better name like UserAuthenticationForms or something like that
const Navigation = (props) => {
  const [userState, setUserState] = useState(null);

  useEffect(()=> {
    firebaseConfig.getUser().then(user => {
      if(user){
        setUserState(user);
      }
    })
  })

  const logout = () => {
    firebaseConfig.logout();
    setUserState(null);
    props.history.replace('/login');
  }

    let buttons;

  if (userState != null) {
    buttons = (
      <button className='logout' onClick={logout}>Logout</button>
    )
  } else {
    buttons = (
      <>
        <button className='register' onClick={() => props.history.push('/register')} >Register</button>
        <button className='Login' onClick={() => props.history.push('login')}>Login</button>
      </>
    )
  }

  return(
  <NavContainer>
      <h1> I render too</h1>
    <nav>
      <ul>
        {buttons}
      </ul>
    </nav>
  </NavContainer>
  )
}

export default withRouter(Navigation);
