import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// Routes
import Routes from './routes';

// GlobalStyle
import GlobalStyle from './styles/global';

// Layout
import Layout from './styles/layout';

// Components
import Header from './components/Header';
import Nav from './components/Nav';
import Content from './components/Content';
import Footer from './components/Footer';

// Load Users
import LoadUsers from './utils/LoadUsers';

function App() {
  return (
    <>
      <LoadUsers>
        <BrowserRouter>
          <Layout>
            <Header />
            <Nav />
            <Content>
              <Routes />
            </Content>
            <Footer />
          </Layout>
          <GlobalStyle />
        </BrowserRouter>
      </LoadUsers>
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
