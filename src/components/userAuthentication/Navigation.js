import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';


import firebaseConfig from '../firebaseConfig'


const NavContainer=styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 55px;
  background: #b5aed6;
  border-bottom: 1px solid #b5aed6;
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

  let logoutbutton;

  if (userState != null) {
    logoutbutton = (
      <button className='logout' onClick={logout}>Logout</button>
    )
  } else {
    return null;
  }

  return(
  <NavContainer>
    <nav>
      <ul>
        {logoutbutton}
      </ul>
    </nav>
  </NavContainer>
  )
}

export default withRouter(Navigation);
