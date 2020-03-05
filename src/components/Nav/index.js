import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';

import { Container } from './styles';

export default function Nav() {
  const { pathname } = useLocation();

  return (
    <Container>
      <Link to="/" className={pathname === '/' ? 'active' : ''}>
        <MdDashboard />
        Dashboard
      </Link>
      <Link to="/users" className={pathname === '/users' ? 'active' : ''}>
        <FaUsers />
        Users
      </Link>
    </Container>
  );
}
