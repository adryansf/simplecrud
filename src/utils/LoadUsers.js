import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

// Load Action
import { loadUsersRequest } from '~/store/modules/users/actions';

// Loader
import Loader from '~/components/Loader';

export default function LoadUsers({ children }) {
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  if (typeof users === 'boolean') {
    dispatch(loadUsersRequest());
    return (
      <div
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Loader />
      </div>
    );
  }

  return <>{children}</>;
}

LoadUsers.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
};
