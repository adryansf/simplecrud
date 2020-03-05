import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { FaUser } from 'react-icons/fa';

import { Container } from './styles';

// Components
import DashboardItem from '~/components/DashboardItem';

export default function Home() {
  const users = useSelector(state => state.users);
  const totalUsers = useMemo(() => users.length, [users]);

  return (
    <Container>
      <DashboardItem
        Icon={FaUser}
        text="Total users"
        value={totalUsers}
        iconColor="#333"
      />
    </Container>
  );
}
