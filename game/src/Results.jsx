import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Disco from './components/Results/Disco';
import Learn from './components/Results/Learn';
import StringLight from './components/Results/StringLight';
import Peace from './components/Results/Peace';
import GrowLight from './components/Results/GrowLight';
import LampShade from './components/Results/LampshadeLight';
import AromatherapyLight from './components/Results/AromatherapyLight';

function Results() {
  const location = useLocation();
  // const { excite_count, learn_count, peace_count } = location.state || { excite_count: 0, learn_count: 0, peace_count: 0 };
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/users/${location.state.userId}`);
        console.log('User data from API:', response.data); // Check the response in console
        setUserData(response.data.user); // Assuming 'user' object contains userId, first_name, last_name
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (location.state && location.state.userId) {
      fetchUserData();
    }
  }, [location.state]);


  // CONDITIONS
  // areCountsEqual
  const areCountsEqual = userData && userData.excite_count === userData.learn_count && userData.excite_count === userData.peace_count;
  // Excite Count is greater than Learn Count, and Learn Count is greater than Peace Count
  const isExciteGreaterThanLearnGreaterThanPeace =
    userData &&
    userData.excite_count > userData.learn_count &&
    userData.learn_count > userData.peace_count;

  // Learn Count is greater than Excite Count, and Excite Count is greater than Peace Count
  const isLearnGreaterThanExciteGreaterThanPeace =
    userData &&
    userData.learn_count > userData.excite_count &&
    userData.excite_count > userData.peace_count;

  // Peace Count is greater than Excite Count, and Excite Count is greater than Learn Count
  const isPeaceGreaterThanExciteGreaterThanLearn =
    userData &&
    userData.peace_count > userData.excite_count &&
    userData.excite_count > userData.learn_count;

  // Excite Count is greater than Peace Count, and Peace Count is greater than Learn Count
  const isExciteGreaterThanPeaceGreaterThanLearn =
    userData &&
    userData.excite_count > userData.peace_count &&
    userData.peace_count > userData.learn_count;

  // Learn Count is greater than Peace Count, and Peace Count is greater than Excite Count
  const isLearnGreaterThanPeaceGreaterThanExcite =
    userData &&
    userData.learn_count > userData.peace_count &&
    userData.peace_count > userData.excite_count;

  // Peace Count is greater than Learn Count, and Learn Count is greater than Excite Count
  const isPeaceGreaterThanLearnGreaterThanExcite =
    userData &&
    userData.peace_count > userData.learn_count &&
    userData.learn_count > userData.excite_count;


  return (
    <div>
      {userData ? (
        <div>
          {/* <p>User ID: {userData.id}</p>
          <p>First Name: {userData.first_name}</p>
          <p>Last Name: {userData.last_name}</p>
          <p>Excite Count: {userData.excite_count}</p>
          <p>Learn Count: {userData.learn_count}</p>
          <p>Peace Count: {userData.peace_count}</p> */}

          {/* Conditionally render components based on conditions */}
          {areCountsEqual && <LampShade userData={userData} />}

          {isExciteGreaterThanLearnGreaterThanPeace && <Disco userData={userData} />}
          {isExciteGreaterThanPeaceGreaterThanLearn && <AromatherapyLight userData={userData} />}

          {isPeaceGreaterThanExciteGreaterThanLearn && <Peace userData={userData} />}
          {isPeaceGreaterThanLearnGreaterThanExcite && <GrowLight userData={userData} />}

          {isLearnGreaterThanExciteGreaterThanPeace && <StringLight userData={userData} />}
          {isLearnGreaterThanPeaceGreaterThanExcite && <AromatherapyLight userData={userData} />}

        </div>
      ) : (
        <p>No user data available</p>
      )}
    </div>
  );
}

export default Results;
