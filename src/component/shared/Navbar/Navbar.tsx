import React from 'react';
import { navAssets, navroutes } from '@/src/const/navbar';
const Navbar = () => {
    return (
        <div className="navbar bg-base-100 mx-[20%]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-none">

                        {
                            navroutes?.map(item => <li>
                                <a>{item?.title}</a>
                                {item?.submenu && item?.submenu?.length > 0 && <ul className="p-2 rounded-none">
                                    {
                                        item?.submenu?.map(submenu => <li><a>{submenu?.title}</a></li>)
                                    }
                                </ul>}
                            </li>)
                        }


                    </ul>
                </div>
              <img src={navAssets?.logo} className='w-[10%]' alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navroutes?.map(items => {
                            return items?.submenu && items?.submenu?.length > 0 ?
                                <li>
                                    <details>
                                        <summary className=''>{items?.title}</summary>
                                        {
                                            items?.submenu && items?.submenu?.length > 0 && <ul className="p-2">
                                                {
                                                    items?.submenu?.map(subMenu => <li><a>{subMenu?.title}</a></li>)
                                                }


                                            </ul>
                                        }
                                    </details>
                                </li> : <li><a>{items?.title}</a></li>
                        })
                    }


                </ul>
            </div>
            <div className="navbar-end">
               
            </div>
        </div>
    );
};

export default Navbar;