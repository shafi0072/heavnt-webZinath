import React from 'react';
import {navroutes} from '@/src/const/navbar'
import Navbar from '../../shared/Navbar/Navbar';
import Banner from '../../app/Home/Banner/Banner';
const Layout = ({children} :any) => {
 
    return (
        <div>
              <Navbar></Navbar>
              <Banner></Banner>
            {children}
         
        </div>
    );
};

export default Layout;