import produce from 'immer';

const INITIAL_STATE = false;

export default function users(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@users/LOAD_SUCCESS': {
        return action.payload.users;
      }

      case '@users/ADD_SUCCESS': {
        draft.push(action.payload.user);
        break;
      }

      case '@users/UPDATE_SUCCESS': {
        return draft.filter(user =>
          user.identifier === action.payload.user.identifier
            ? action.payload.user
            : user
        );
      }

      case '@users/DELETE_SUCCESS': {
        return draft.filter(
          user => user.identifier !== action.payload.identifier
        );
      }

      default: {
        break;
      }
    }
  });
}
