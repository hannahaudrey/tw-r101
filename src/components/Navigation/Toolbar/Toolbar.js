import React from 'react';
import Logo from '../../Logo/Logo';

import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Toolbar.module.css';

const Toolbar = (props) => (
    <header className={classes.Toolbar}>
        <nav>
            <Logo className={classes.Toolbar}/>
            <NavigationItems />
        </nav>
    </header>
);

export default Toolbar;