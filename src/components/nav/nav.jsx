import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Drawer, DrawerContent, DrawerAppContent } from '@rmwc/drawer';
import '@rmwc/drawer/dist/styles';
import './nav.module.scss';

import NavItem from './nav-item';
import NavButton from './nav-button';

const Nav = ({ routes }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <Router>
      <NavButton onClick={() => setOpen(!open)} />
      <Drawer modal open={open} onClose={() => setOpen(false)}>
        <DrawerContent>
          <nav>
            <ul>
              {routes.map(({ path, name }) => (
                <NavItem path={path} name={name} key={path} />
              ))}
            </ul>
          </nav>
        </DrawerContent>
      </Drawer>
      <DrawerAppContent style={{ minHeight: '15rem', padding: '1rem' }}>
        <Switch>
          {routes.map(({ path, Component }) => (
            <Route exact path={path} key={path}>
              <Component />
            </Route>
          ))}
        </Switch>
      </DrawerAppContent>
    </Router>
  );
};

Nav.propTypes = {
  routes: PropTypes.instanceOf(Array).isRequired,
};

export default Nav;
