import React from 'react';
import { navroutes } from '@/src/const/navbar';
const Navbar = () => {
    return (
        <div>
            <div className="navbar px-28 shadow-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box">
                            {navroutes?.map((item, index) => (
                                <li className='relative' key={index}>
                                    {item.title}
                                    {item.submenu && (
                                        <ul className="absolute hidden p-2 bg-green-500 shadow-md">
                                            {item.submenu.map((subitem, subIndex) => (
                                                <li key={subIndex}>{subitem.title}</li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Havent</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu relative menu-horizontal px-1">
                        {navroutes?.map((item, index) => (
                            <li className='hover:text-blue-500 mr-5 relative' key={index}>
                                {item.title}
                                {item.submenu && (
                                    <ul className="absolute hidden p-2 bg-green-500 shadow-md">
                                        {item.submenu.map((subitem, subIndex) => (
                                            <li key={subIndex}>{subitem.title}</li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;