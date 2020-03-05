import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FaUserPlus, FaSearch } from 'react-icons/fa';

import { Container, UsersArea } from './styles';

// Components
import User from '~/components/User';
import CreateUser from '~/components/CreateUser';

export default function Users() {
  const allUsers = useSelector(state => state.users);
  const [users, setUsers] = useState(allUsers);
  const [searchName, setSearchName] = useState('');
  const [searchDate, setSearchDate] = useState('');
  const [isDateInput, setIsDateInput] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    let newUsers;
    if (!!searchName || !!searchDate) {
      newUsers = allUsers.filter(
        user =>
          user.full_name.toUpperCase().search(searchName.toUpperCase()) !== -1
      );

      newUsers = newUsers.filter(
        user => user.birth_date.search(searchDate) !== -1
      );
    } else {
      newUsers = allUsers;
    }

    setUsers(newUsers);
  }, [searchName, searchDate, allUsers]);

  return (
    <Container>
      <div className="search">
        <button type="button" onClick={() => setIsModalOpen(true)}>
          <FaUserPlus />
        </button>
        <span>
          <FaSearch />
          <input
            type="text"
            value={searchName}
            onChange={e => setSearchName(e.target.value)}
            placeholder="Name"
          />
          <input
            type={isDateInput || !!searchDate ? 'date' : 'text'}
            value={searchDate}
            onChange={e => setSearchDate(e.target.value)}
            placeholder="Date of Birth"
            onBlur={() => setIsDateInput(false)}
            onFocus={() => setIsDateInput(true)}
          />
        </span>
      </div>
      <UsersArea>
        {users.map(user => (
          <User user={user} key={user.identifier} />
        ))}
      </UsersArea>
      <CreateUser isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </Container>
  );
}
