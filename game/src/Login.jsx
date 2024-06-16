import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import axios from 'axios'; // Import axios for making HTTP requests
import LogoImg from "./assets/images/ZarinLogo.svg";
import UserImg from "./assets/images/UserImg.svg";
import "./App.scss";

const LoginSection = styled.section`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4em;
`;

const LogoContainer = styled(motion.div)`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background-color: #F3F3F3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;

const LoginButton = styled(motion.div)`
`;

const UsersList = styled.ul`
  margin-top: 20px;
  padding: 0;
  list-style-type: none;
  width: 100%;
  max-width: 400px;
`;

const UserItem = styled.li`
  background-color: #f3f3f3;
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;
`;

const LoginMessage = styled(motion.div)`
display: ${(props) => props.error ? 'block' : 'none'};
  background-color: #f8d7da;
  padding: 10px;
  border: 1px solid #f5c6cb;
  border-radius: 5px;
  width: 70%;
  margin: 0 auto;
  text-align: center;
  font-weight: 600;
  direction: rtl;
  font-size: 12px;
  position: absolute;
  top: 5%;
`;

const Login = ({onLoginSuccess}) => {
  const [personalCode, setPersonalCode] = useState('');
  const [users, setUsers] = useState([]);
  const [loginMessage, setLoginMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/users/login', { personalCode });
      console.log('Response from server:', response); // Log the entire response
      const user = response.data.user;
      console.log('Logged in user:', user); // Log the user object
      console.log('Logged in user ID:', user.id); // Log the user ID (use 'id' instead of 'userId')
      setLoginMessage(response.data.message);
      onLoginSuccess(user.id);
    } catch (error) {
      if (error.response) {
        setLoginMessage(error.response.data.error);
      } else {
        setLoginMessage('خطایی رخ داده است');
      }
    }
  };


  return (
    <div className='app-container login'>
      <LoginSection>
        <img src={LogoImg} alt="Logo Image" className="loginLogo" />

        <LogoContainer
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, type: "spring", stiffness: 100 }}
        >
          <img src={UserImg} alt="User Img" className='userLogo' />
        </LogoContainer>

        <FormContainer
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 3, type: "spring", stiffness: 100 }}
        >
          <input
            type="text"
            required
            className="loginFormInput"
            placeholder='کد پرسنلی'
            value={personalCode}
            onChange={(e) => setPersonalCode(e.target.value)}
          />
        </FormContainer>

        {/* Display login message */}
        {loginMessage && (
          <LoginMessage
            key="error-message"
            error={!!loginMessage}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 20 }}
            exit={{ y: -20, opacity: 0 }}
          >
            <p>{loginMessage}</p>
          </LoginMessage>
        )}

        <LoginButton
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 4, type: "spring", stiffness: 100 }}
        >
          <button className='loginButton' onClick={handleLogin}>
            وارد شوید
          </button>
        </LoginButton>
      </LoginSection>
    </div>
  );
}

export default Login;
