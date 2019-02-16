import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS
} from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();

  console.log(`User ID: ${currentUser.uid}`);

  // We don't nee to dispatch our action, since we are only adding an new user to DB.
  // But Redux still expects an action object to be returned with a 'type'.
  // Use redux-thunk to break the rules.
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employers`)
    .push({ name, phone, shift })
    .then(() => {
      dispatch({ type: EMPLOYEE_CREATE });
      Actions.pop();
      // Pop() routes back to the previous screen
    });
  };
};

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employers`)
    .on('value', snapshot => {
      dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};
