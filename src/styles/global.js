import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  *{
    padding:0;
    margin: 0;
    outline:0;
    box-sizing: border-box;
  }

  html,#root,body{
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    height: 100%;
    -webkit-font-smoothing: antialiased;
  }

  button,input{
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
  }

  button{
    cursor:pointer;
  }
`;
