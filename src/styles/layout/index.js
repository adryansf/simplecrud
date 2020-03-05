import styled from 'styled-components';

export default styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 60px 1fr 30px;
  height: 100%;

  grid-template-areas:
    'header header'
    'nav content'
    'footer footer';

  @media (max-width: 649px) {
    grid-template-columns: 1fr;
    grid-template-rows: 60px 40px 1fr 30px;

    grid-template-areas:
      'header'
      'nav'
      'content'
      'footer';
  }
`;
