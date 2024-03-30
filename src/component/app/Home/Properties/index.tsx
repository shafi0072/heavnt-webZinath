import {propertiesData} from '@/src/const/properties/properties';
import React from 'react';

const index = () => {
    return (
        <div className='justify-center items-center text-center mx-auto my-14'>
            <div>
                <h1 className='text-4xl font-semibold'>{propertiesData?.HeadLine}</h1>
                <p className='my-10'>{propertiesData?.subTitle}</p>
            </div>
            {/* card  */}
           
            <div className="justify-center  mx-auto card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img className='rounded-lg' src="https://media.istockphoto.com/id/1442148484/photo/3d-rendering-of-modern-suburban-house-in-the-garden.jpg?s=612x612&w=0&k=20&c=8Iu_h5cFOEnlPz4_n2nfSUtOyfM_a-hHx9rmlxMF2rI=" alt="Shoes" /></figure>
  
 </div>
 <div className='flex justify-center gap-5  mx-auto '>
      <div>
       <h2>gh</h2>
       <h2>gh</h2>
       </div>
       <div>
       <h2>gh</h2>
       <h2>gh</h2>
       </div>
      </div>
         
        </div>
    );
};

export default index;