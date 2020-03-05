export function loadUsersRequest() {
  return {
    type: '@users/LOAD_REQUEST',
  };
}

export function loadUsersSuccess(users) {
  return {
    type: '@users/LOAD_SUCCESS',
    payload: { users },
  };
}

export function addUserSuccess(user) {
  return {
    type: '@users/ADD_SUCCESS',
    payload: { user },
  };
}

export function addUserRequest(name, birthDate, setIsLoading) {
  return {
    type: '@users/ADD_REQUEST',
    payload: { name, birthDate, setIsLoading },
  };
}

export function updateUserRequest(name, birthDate, identifier, setIsLoading) {
  return {
    type: '@users/UPDATE_REQUEST',
    payload: { name, birthDate, identifier, setIsLoading },
  };
}

export function updateUserSuccess(user) {
  return {
    type: '@users/UPDATE_SUCCESS',
    payload: { user },
  };
}

export function deleteUserRequest(identifier, setIsLoading) {
  return {
    type: '@users/DELETE_REQUEST',
    payload: { identifier, setIsLoading },
  };
}

export function deleteUserSuccess(identifier) {
  return {
    type: '@users/DELETE_SUCCESS',
    payload: { identifier },
  };
}
