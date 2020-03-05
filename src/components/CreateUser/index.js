import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { MdClose, MdPersonAdd } from 'react-icons/md';
import { AiOutlineLoading } from 'react-icons/ai';

import { Container } from './styles';

// Components

// Actions
import { addUserRequest } from '~/store/modules/users/actions';

export default function CreateUser({ isOpen, setIsOpen }) {
  const [isInDiv, setIsInDiv] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');

  const dispatch = useDispatch();

  function handleSubmit() {
    setIsLoading(true);
    dispatch(addUserRequest(name, birthDate, setIsLoading));
    setName('');
    setBirthDate('');
  }

  return (
    <Container onClick={() => !isInDiv && setIsOpen(false)} isOpen={isOpen}>
      <div
        onMouseOver={() => setIsInDiv(true)}
        onMouseOut={() => setIsInDiv(false)}
        className="register"
      >
        <button type="button" onClick={() => setIsOpen(false)}>
          <MdClose />
        </button>
        <h1>Register a new user</h1>
        <span>
          <label htmlFor="full_name">Full name</label>
          <input
            type="text"
            id="full_name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </span>

        <span>
          <label htmlFor="birth_date">Date of Birth</label>
          <input
            type="date"
            id="birth_date"
            value={birthDate}
            onChange={e => setBirthDate(e.target.value)}
          />
        </span>

        {isLoading ? (
          <AiOutlineLoading className="load" />
        ) : (
          <button type="button" onClick={handleSubmit}>
            <MdPersonAdd />
          </button>
        )}
      </div>
    </Container>
  );
}

CreateUser.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};
