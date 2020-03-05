import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { FaUserCircle, FaUserEdit, FaUserCheck } from 'react-icons/fa';
import { MdDelete, MdWarning } from 'react-icons/md';
import { AiOutlineLoading } from 'react-icons/ai';
import { darken } from 'polished';

import { Container, Input, Actions } from './styles';

// Actions
import {
  deleteUserRequest,
  updateUserRequest,
} from '~/store/modules/users/actions';

export default function User({ user }) {
  const [edit, setEdit] = useState(false);
  const [dblRemove, setDblRemove] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState(user.full_name);
  const [birthDate, setBirthDate] = useState(user.birth_date);

  const dispatch = useDispatch();

  function handleUpdate(identifier) {
    setEdit(false);
    setIsLoading(true);
    dispatch(updateUserRequest(name, birthDate, identifier, setIsLoading));
  }

  function handleDelete(identifier) {
    setIsLoading(true);
    dispatch(deleteUserRequest(identifier, setIsLoading));
  }

  const Delete = (
    <MdDelete
      onClick={() => {
        setDblRemove(true);
      }}
      color="#c4342d"
    />
  );

  const Warn = (
    <MdWarning
      color={darken(0.05, 'darkorange')}
      onBlur={() => setTimeout(() => setDblRemove(false), 3000)}
      onClick={() => handleDelete(user.identifier)}
    />
  );

  return (
    <Container>
      <FaUserCircle />
      <span>
        <label htmlFor={`full_name-${user.identifier}`}>Name</label>
        <Input
          id={`full_name-${user.identifier}`}
          edit={edit}
          value={name}
          onChange={e => setName(e.target.value)}
          maxLength={32}
        />
      </span>

      <span>
        <label htmlFor={`birth_date-${user.identifier}`}>Date of Birth</label>
        <Input
          id={`birth_date-${user.identifier}`}
          type="date"
          edit={edit}
          value={birthDate}
          onChange={e => setBirthDate(e.target.value)}
        />
      </span>

      <Actions>
        {edit ? (
          <FaUserCheck
            color="darkgreen"
            onClick={() => handleUpdate(user.identifier)}
          />
        ) : (
          <FaUserEdit color="orange" onClick={() => setEdit(true)} />
        )}
        {dblRemove ? Warn : Delete}
      </Actions>

      {isLoading && (
        <div className="load">
          <AiOutlineLoading />
        </div>
      )}
    </Container>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    full_name: PropTypes.string,
    birth_date: PropTypes.string,
    identifier: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
};
