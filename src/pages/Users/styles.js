import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 10px;

  div.search {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;

    span {
      display: flex;
      max-width: 80%;
      width: 100%;
      justify-content: flex-end;
      align-items: center;
    }

    input:first-child {
      width: 50%;
    }

    input {
      padding: 5px;
      height: 30px;
      width: 30%;
      color: #fff;
      background: rgba(0, 0, 0, 0.4);
      border: 0;
      border-radius: 4px;
      margin: 10px;
      transition: background 0.5s;

      &[type='date']::-webkit-inner-spin-button {
        -webkit-appearance: none;
        display: none;
      }

      &[type='date']::-webkit-calendar-picker-indicator {
        -webkit-appearance: none;
        display: none;
      }

      &::placeholder {
        color: #ccc;
      }

      &:focus {
        background: rgba(0, 0, 0, 0.6);
      }
    }

    button {
      display: flex;
      padding: 5px;
      border-radius: 50%;
      border: 0;
      color: darkgreen;
      font-size: 20px;
      transition: color 0.5s, background 0.5s;
      background: rgba(255, 255, 255, 0.6);

      justify-content: center;
      align-items: center;

      &:hover {
        background: rgba(255, 255, 255, 0.3);
      }
    }
  }
`;

export const UsersArea = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;

  @media (max-width: 774px) {
    flex-direction: column;
  }
`;
