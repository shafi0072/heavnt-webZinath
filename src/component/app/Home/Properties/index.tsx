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
            <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
                <div className="-m-1 flex flex-wrap md:-m-2">
                {
                        propertiesData?.peroperty?.map(item => <div className="flex w-1/3 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={item?.img} />
                        </div>
                    </div>)
                    }
                </div>
            </div>

            

        </div>
    );
};

export default index;