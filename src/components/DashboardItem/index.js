import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function DashboardItem({ Icon, text, value, ...colors }) {
  return (
    <Container colors={colors}>
      <span>
        <Icon />
        <p>{text}</p>
      </span>
      <p>{value}</p>
    </Container>
  );
}

DashboardItem.propTypes = {
  Icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  text: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DashboardItem.defaultProps = {
  Icon: () => <div />,
  value: '',
};
