import { IoHomeOutline } from "react-icons/io5";
import React from 'react';
import { HiOutlineUserGroup } from "react-icons/hi";
import { BiUser } from "react-icons/bi";
import { ImListNumbered } from "react-icons/im";
import {experienceData} from '@/src/const/home/experience'

const index = () => {
    return (
        <div className=' '>
         
         <div className="hero h-[60vh] " style={{backgroundImage: 'url(https://st.depositphotos.com/1658611/2932/i/450/depositphotos_29329143-stock-photo-street-of-residential-houses.jpg)'}}>
  <div className="hero-overlay bg-opacity-80"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="w-[50%]">
      <h1 className="text-2xl font-semibold">More than <span className='underline'>10 Years</span> of
Experience</h1>
<p>{experienceData?.SubTitle}</p>
    </div>
    <div>
    <div className="flex gap-4">
        <h1><IoHomeOutline /></h1>
    <h1>Properties Sold</h1>
    </div>
    <h1><HiOutlineUserGroup /></h1>
    </div>
    <div>
    <h1><BiUser /></h1>
    <h1><ImListNumbered /></h1>
    </div>
  </div>
</div>

        </div>
    );
};

export default index;