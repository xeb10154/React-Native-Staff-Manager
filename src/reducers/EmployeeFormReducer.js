import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: 'Monday' // Default date picker value
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
    // square braces [.prop] are for 'key interpolation', not an array!
    // interpolated value example - name: 'raymond'
    return { ...state, [action.payload.prop]: action.payload.value };
    case EMPLOYEE_CREATE:
    return INITIAL_STATE;
    default:
    return state;
  }
};
