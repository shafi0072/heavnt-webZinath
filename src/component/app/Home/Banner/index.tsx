import { bannerData } from '@/src/const/home/banner';
import React from 'react';

const index = () => {
    return (
        <div>
            <div className="hero h-[70vh]" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className=" w-full">
                        <h1 className="mb-5 text-3xl font-semibold">{bannerData?.HeadLine}</h1>
                        <div className='flex items-center justify-evenly'>
                            <div className='w-[100px] h-[2px] bg-white'></div>
                            <div className='w-[100px] '><img src="/assets/images/icon.png" className='' alt="" /></div>
                            <div className='w-[100px] h-[2px] bg-white'></div>
                        </div>
                        <p className='mb-5'>{bannerData?.subTitle}</p>
                        <div className="bg-gray-200   grid grid-cols-1 md:grid-cols-3">
                            {
                                bannerData?.Action?.map((items: any) => {
                                    return items?.type === 'text' ? (

                                        <div className="p-3">
                                            <label className="label">
                                                <span className="label-text">{items?.title}</span>
                                            </label>

                                            <input onChange={(e) => items?.onChange(e)} type={items?.type} placeholder="Search Your Location" className="input input-bordered w-full   max-w-xs rounded-none" />
                                        </div>
                                    ) : (<div className="p-3">
                                        <label className="label">
                                            <span className="label-text">{items?.title}</span>
                                        </label>
                                        <select onChange={(e) => items?.onChange(e)} className='w-full p-2 text-black' name="" id="">

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