import React from 'react';
import classes from './Home.module.css';

const Home = () => {
    return (
        <React.Fragment>
            <h2 className={classes.heading}>Innovation. Passion. Dedication.</h2> {/* placeholder */}
            <h3 className={classes.subtext}>These are the three core values of TomasinoWeb. Do you have what it takes to be a TomWebber?</h3>
				<button>KNOW MORE</button>
				<button>APPLY NOW</button>
        </React.Fragment>
		
    );
};

export default Home;