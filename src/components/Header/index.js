import React from 'react';
import { FaUserTie } from 'react-icons/fa';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <h1>CRUD</h1>
      <section>
        <span>
          <FaUserTie />
        </span>
        <span>
          <p>Admin</p>
        </span>
      </section>
    </Container>
  );
}
