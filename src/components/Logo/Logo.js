import React from 'react';

import tomasinowebLogo from '../../assets/images/TomasinoWeb-Logo-2.png'
import classes from './Logo.module.css';

const Logo = ( props ) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={tomasinowebLogo} alt="TW Logo" />
    </div>
);

export default Logo;