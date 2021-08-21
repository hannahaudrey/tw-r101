import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const NavigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Home</NavigationItem>
        <NavigationItem link="/frequently-asked-questions">FAQ</NavigationItem>
        <NavigationItem link="/about-tomasinoweb">About TW</NavigationItem>
        <NavigationItem link="/about-recruitment">About R101</NavigationItem>
        <NavigationItem link="/apply">Apply</NavigationItem>
    </ul>
);

export default NavigationItems;