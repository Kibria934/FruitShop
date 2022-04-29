import React from 'react';
import NavigationBar from '../../SharePage/Navbar/NavigationBar';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';

const Home = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div >
            <Banner></Banner>
            </div>
            <Inventory></Inventory>
        </div>
    );
};

export default Home;