import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

// API
import api from '~/services/api';

// Actions

import {
  loadUsersSuccess,
  addUserSuccess,
  deleteUserSuccess,
  updateUserSuccess,
} from './actions';

export function* loadUsers() {
  try {
    const { data } = yield call(api.get, 'find');
    yield put(loadUsersSuccess(data));
  } catch (e) {
    toast.error('The connection with API failed');
  }
}

export function* addUser({ payload }) {
  const { name, birthDate, setIsLoading } = payload;

  const user = {
    full_name: name,
    birth_date: birthDate,
    identifier: Date.now(),
  };

  try {
    yield call(api.post, 'save', user);
    toast.success('User has been added');
    setIsLoading(false);
    yield put(addUserSuccess(user));
  } catch (e) {
    toast.error("User hasn't been added");
  }
}

export function* updateUser({ payload }) {
  const { identifier, name, birthDate, setIsLoading } = payload;

  const user = {
    identifier,
    full_name: name,
    birth_date: birthDate,
  };

  try {
    yield call(api.put, `update/${identifier}`, user);
    toast.success('User has been updated');
    setIsLoading(false);
    yield put(updateUserSuccess(user));
  } catch (e) {
    toast.error("User hasn't been updated");
  }
}

export function* deleteUser({ payload }) {
  const { identifier, setIsLoading } = payload;

  try {
    yield call(api.delete, `delete/${identifier}`);
    setIsLoading(false);
    toast.success('User has been deleted');
    yield put(deleteUserSuccess(identifier));
  } catch (e) {
    toast.error("User hasn't been deleted");
  }
}

export default all([
  takeLatest('@users/ADD_REQUEST', addUser),
  takeLatest('@users/UPDATE_REQUEST', updateUser),
  takeLatest('@users/DELETE_REQUEST', deleteUser),
  takeLatest('@users/LOAD_REQUEST', loadUsers),
]);
