import {
  GET_NODES_SUCCESS,
  GET_NODES_FAILED,
} from 'app/redux/constants';

export const initialState = {
  list: null,
  error: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_NODES_SUCCESS: {
      return {
        ...state,
        list: action.payload,
        error: false,
      };
    }
    case GET_NODES_FAILED: {
      return {
        ...state,
        list: null,
        error: true,
      };
    }
    default:
      return state;
  }
}
