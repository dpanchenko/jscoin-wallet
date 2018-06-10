import {
  SET_WALLET,
  GET_BALANCE_SUCCESS,
  GET_BALANCE_FAILED,
  MINE_BLOCK_START,
  MINE_BLOCK_SUCCESS,
  MINE_BLOCK_FAILED,
  GET_BLOCKS_START,
  GET_BLOCKS_SUCCESS,
  GET_BLOCKS_FAILED,
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
  mining: false,
  blocks: [],
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
    case MINE_BLOCK_START: {
      return {
        ...state,
        mining: true,
      };
    }
    case MINE_BLOCK_FAILED:
    case MINE_BLOCK_SUCCESS: {
      return {
        ...state,
        mining: false,
      };
    }
    case GET_BLOCKS_START:
    case GET_BLOCKS_FAILED: {
      return {
        ...state,
        blocks: [],
      };
    }
    case GET_BLOCKS_SUCCESS: {
      return {
        ...state,
        blocks: action.payload,
      };
    }
    default:
      return state;
  }
}
