import { propertiesData } from '@/src/const/properties/properties';
import React from 'react';

const index = () => {
    return (
        <div className='justify-center items-center text-center mx-auto my-14'>
            <div>
                <h1 className='text-4xl font-semibold'>{propertiesData?.HeadLine}</h1>
                <p className='my-10'>{propertiesData?.subTitle}</p>
            </div>
            {/* card  */}
            <div  className='grid grid-cols-2 md:grid-cols-3 p-12 mx-auto gap-4'>

{
                        propertiesData?. property?.map((item, index) =>
        
         <div key={index}>
            <img className='h-auto max-w-full rounded-lg' src={item.img} alt="" />
            
               <div className='mt-3'>
               <div className='flex justify-between'>
                    <h1>{item.title}</h1>
                    <h1>for rent</h1>
                    
                   

                </div>
                <div className='flex justify-between'>
                <h1>{item.room} rooms</h1>
                    <p>{item.price}$</p>
                </div>
               </div>
            </div>
           
        
      
                      )
                    }

  </div>



        </div>
    );
};

export default index;