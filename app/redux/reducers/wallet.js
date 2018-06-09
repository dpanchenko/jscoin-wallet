import {
  SET_WALLET,
  GET_BALANCE_SUCCESS,
  GET_BALANCE_FAILED,
} from 'app/redux/constants';

export const initialState = {
  wallet: null,
  confirmed: {
    amount: null,
    debet: null,
    credit: null,
  },
  pending: {
    amount: null,
    debet: null,
    credit: null,
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_WALLET: {
      return {
        ...state,
        wallet: action.payload,
      };
    }
    case GET_BALANCE_SUCCESS: {
      const { confirmed, pending } = action.payload;
      return {
        ...state,
        confirmed,
        pending,
      };
    }
    case GET_BALANCE_FAILED: {
      return {
        ...state,
        confirmed: initialState.confirmed,
        pending: initialState.pending,
      };
    }
    default:
      return state;
  }
}
