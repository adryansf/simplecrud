import styled from 'styled-components';

export const Container = styled.div`
  grid-area: nav;
  background: linear-gradient(#7159c1, #251d40);
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    display: flex;
    width: 100%;
    text-decoration: none;
    color: #fff;
    opacity: 0.6;
    font-size: 18px;
    transition: color 0.5s;

    justify-content: center;

    & {
      margin-top: 10px;
    }

    &.active {
      font-weight: bold;
      text-shadow: 1px 1px 1px black;
      opacity: 1;
    }

    &:hover {
      opacity: 1;
    }

    svg {
      margin-right: 5px;
      font-size: 20px;
    }
  }

  @media (max-width: 649px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
`;
