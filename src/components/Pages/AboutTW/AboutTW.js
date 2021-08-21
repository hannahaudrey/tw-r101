import React from 'react';

import tomasinowebLogo from '../../../assets/images/TW-Logo.png'
import classes from './AboutTW.module.css';

const AboutTomasinoweb = () => {
    return (
        <React.Fragment>
		<div className={classes.rectangle}>
		
		<div className={classes.gridsetA}>
	    <div className={classes.grid1}>
		
		<div className={classes.Logo} style={{height: "500px"}}>
        <img src={tomasinowebLogo} alt="TW Logo" />
        </div>
		</div>
		 
            <div className={classes.grid2}>
			<a className={classes.title}>What is TomasinoWeb?</a> 
			</div>
			
			<div className={classes.grid3}>
			<p className={classes.text}>TomasinoWeb is the official digital media organization of the University of Santo Tomas composed of students who are immensely interested in multimedia journalism.'</p>
			<p className={classes.text}>Its primary goal as a student publication is to deliver relevant information to the Thomasian community through online media. Moreover, its goal as a University-wide organization is to conduct activities that will hone the journalistic, artistic, technical, and leadership skills of its members, and to contribute to the mission and vision of the University.'</p>
			</div>
			</div>
			
			</div>
        </React.Fragment>
    );
};

export default AboutTomasinoweb;