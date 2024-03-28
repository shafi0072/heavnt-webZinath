import React from 'react';
import Navbar from '../../shared/Navbar/Navbar';
const Layout = ({ children }: any) => {

    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
};

export default Layout;