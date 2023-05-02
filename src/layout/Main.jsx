import React from 'react';
import Footer from '../pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import NavbarChef from '../pages/Shared/NavbarChef/NavbarChef';

const Main = () => {
    return (
        <div>
            <NavbarChef></NavbarChef>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;