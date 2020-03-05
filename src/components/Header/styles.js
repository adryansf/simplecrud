import styled from 'styled-components';

export const Container = styled.header`
  background: #7159c1;
  grid-area: header;
  display: flex;
  flex: 1;

  justify-content: space-between;
  align-items: center;

  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.9);
  margin-bottom: 0.8px;

  h1 {
    color: #fff;
    text-shadow: 1px 1px 1px black;
    text-align: center;
    margin-left: 10px;
  }
  section {
    display: flex;
    margin-right: 10px;
    color: #333;
    font-weight: bold;
    align-items: center;

    span:first-child {
      display: flex;
      width: 40px;
      height: 40px;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 50% 0 0 50%;

      align-items: center;
      justify-content: center;

      svg {
        font-size: 20px;
        color: #fff;
      }
    }

    span:nth-child(2) {
      display: flex;
      background: rgba(0, 0, 0, 0.5);
      padding: 3px;
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
      width: 100px;
      height: 40px;
      justify-content: center;
      align-items: center;
      flex: 1;
      p {
        font-size: 16px;
        color: #fff;
      }
    }
  }
`;
