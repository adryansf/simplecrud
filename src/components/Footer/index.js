import React from 'react';
import { FaHeart } from 'react-icons/fa';

import { Container } from './styles';

export default function Footer() {
  return (
    <Container>
      <p>Made with</p>
      <FaHeart />
      <p>by Adryan Freitas</p>
    </Container>
  );
}
