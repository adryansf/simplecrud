import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  width: 100%;
  height: 100%;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  align-self: center;

  justify-content: center;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    background: #7159c1;
    max-width: 500px;
    width: 100%;
    padding: 10px 20px;
    border-radius: 8px;

    justify-content: center;
    align-items: center;

    svg {
      align-self: flex-end;
    }

    h1 {
      color: #251d40;
      text-shadow: 1px 1px 1px white;
      font-size: 30px;
      margin: 30px 0;
    }

    span {
      display: flex;
      width: 100%;
      flex-direction: column;

      label {
        font-size: 16px;
        font-weight: bold;
        color: #fff;
        margin: 10px 0px;
      }

      input {
        flex: 1;
        padding: 5px;
        margin-bottom: 20px;
        border: 0;
        background: 0;
        border-bottom: 1px solid #fff;
        color: #ccc;

        &[type='date']::-webkit-inner-spin-button {
          -webkit-appearance: none;
          display: none;
        }

        &[type='date']::-webkit-calendar-picker-indicator {
          -webkit-appearance: none;
          display: none;
        }
      }
    }

    button:first-child {
      border: 0;
      background: rgba(0, 0, 0, 0.5);
      opacity: 0.6;
      transition: opacity 0.5s;
      align-self: flex-end;
      font-size: 16px;
      padding: 5px;
      margin-bottom: 0;

      &:hover {
        background: rgba(0, 0, 0, 0.5);
        opacity: 0.5;
      }
    }

    button {
      border: 1px solid rgba(255, 255, 255, 0.5);
      font-size: 25px;
      border-radius: 50%;
      display: flex;
      margin-bottom: 10px;
      background: 0;
      padding: 10px;
      font-weight: bold;
      transition: background 0.5s, color 0.5s;
      color: #fff;

      align-items: center;
      justify-content: center;

      &:hover {
        background: darkgreen;
      }
    }

    svg.load {
      font-size: 30px;
      color: #fff;
      align-self: center;
      animation: roll 2s infinite;
      transform: rotate(360deg);

      @keyframes roll {
        0% {
          transform: rotate(0);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    }
  }
`;
