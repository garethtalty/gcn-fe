import { React } from 'react';
import '@rmwc/typography/styles';
import Header from './components/header';
import Nav from './components/nav';
import Footer from './components/footer';
import routes from './routes';

import './app.css';

export default function App() {
  return (
    <>
      <Header />
      <Nav routes={routes} />
      <Footer />
    </>
  );
}
