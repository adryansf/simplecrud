import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 250px;
  width: 100%;
  padding: 10px 0px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  margin: 10px;
  transition: background 0.5s;

  align-items: center;
  justify-content: space-evenly;

  &:hover {
    background: #fff;
  }

  & + & {
    margin-left: 10px;
  }

  svg {
    font-size: 60px;
    color: #000;
  }

  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;

    label {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 2px;
      color: #7159c1;
    }
  }

  div.load {
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.8);

    svg {
      font-size: 40px;
      color: #7159c1;
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

  @media (max-width: 774px) {
    flex-direction: column;
    max-width: 95%;
  }
`;

export const Input = styled.input.attrs(props => ({
  disabled: !props.edit,
}))`
  border: 0;
  background: 0;
  color: #333;
  text-align: center;
  flex: 1;
  width: 240px;

  &:focus {
    border-bottom: 1px solid #ccc;
  }

  &[type='date']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  &[type='date']::-webkit-calendar-picker-indicator {
    -webkit-appearance: none;
    display: none;
  }
`;

export const Actions = styled.span`
  flex-direction: row !important;
  justify-content: space-around !important;

  svg {
    font-size: 20px;
    margin: 0 2px;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;
