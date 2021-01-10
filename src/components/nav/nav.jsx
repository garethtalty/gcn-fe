import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Drawer, DrawerContent, DrawerAppContent } from '@rmwc/drawer';
import '@rmwc/drawer/dist/styles';
import './nav.module.scss';

import NavItem from './nav-item';
import NavButton from './nav-button';
import NavSubheader from './nav-subheader';

const Nav = ({ routes }) => {
  const [isOpen, setOpen] = useState(false);
  const [isSticky, setSticky] = useState(true);

  const handleLinkClick = () => setTimeout(() => setOpen(false), 500);
  return (
    <Router>
      <NavSubheader isSticky={isSticky} setSticky={setSticky}>
        <NavButton onClick={() => setOpen(!isOpen)} isOpen={isOpen} />
        {/* todo: <SocialIcons /> */}
      </NavSubheader>
      <Drawer
        modal
        open={isOpen}
        onClose={() => setOpen(false)}
        style={{
          top: isSticky && window.scrollY !== 0 ? 40 : 45,
        }}
      >
        <DrawerContent>
          <nav>
            <ul>
              {routes.map(({ path, name }) => (
                <NavItem path={path} name={name} key={path} onClick={handleLinkClick} />
              ))}
            </ul>
          </nav>
        </DrawerContent>
      </Drawer>
      <DrawerAppContent>
        <Switch>
          {routes.map(({ path, Component }) => (
            <Route exact path={path} key={path}>
              <Component name={path} />
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
