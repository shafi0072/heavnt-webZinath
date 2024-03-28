import { bannerData } from '@/src/const/home/banner';
import React from 'react';

const index = () => {
    return (
        <div>
            <div className="hero h-[70vh]" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg w-full">
                        <h1 className="mb-5 text-3xl font-semibold">{bannerData?.HeadLine}</h1>
                        <p className='mb-5'>{bannerData?.subTitle}</p>
                        <div className="bg-gray-200  grid grid-cols-1 md:grid-cols-3">
                            {
                                bannerData?.Action?.map((items: any) => {
                                    return items?.type === 'text' ? (

                                        <div className="p-4">
                                            <label className="label">
                                                <span className="label-text">{items?.title}</span>
                                            </label>
                                            <input onChange={(e) => items?.onChange(e)} type={items?.type} placeholder="Search Your Location" className="input input-bordered w-full mb-2 p-2 max-w-xs rounded-none" />
                                        </div>
                                    ) : (<div className="p-5">
                                        <label className="label">
                                            <span className="label-text">{items?.title}</span>
                                        </label>
                                        <select onChange={(e) => items?.onChange(e)} className='w-full p-2 mb-2 text-black' name="" id="">

                                            {
                                                items?.values?.map((item: any) => <option value={item}>{item}</option>)
                                            }
                                        </select>
                                    </div>)
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;