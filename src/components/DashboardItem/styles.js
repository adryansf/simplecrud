import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props =>
    props.colors.backgroundColor || `rgba(255,255,255,0.5)`};
  max-width: 300px;
  max-height: 100px;
  border-radius: 6px;
  padding: 10px;
  justify-content: space-between;
  transition: padding 0.2s;

  &:hover {
    padding: 8px 10px;
    opacity: 0.8;
  }

  span {
    display: flex;
    font-size: 20px;
    align-self: center;
    font-weight: bold;
    svg {
      font-size: 35px;
      margin-right: 10px;
      color: ${props => props.colors.iconColor || '#000'};
    }
  }

  p {
    align-self: center;
    font-size: 30px;
    color: ${props => props.colors.textColor || '#000'};
  }
`;
