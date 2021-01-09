import { React } from 'react';
import Nav from './components/nav';
import routes from './routes';

import './app.css';

export default function App() {
  return <Nav routes={routes} />;
}
