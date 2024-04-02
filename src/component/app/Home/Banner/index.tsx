import { bannerData } from '@/src/const/home/banner';
import React from 'react';

const index = () => {
    return (
        <div>
            <div className="hero h-[100vh]" style={{ backgroundImage: 'url(https://media.istockphoto.com/id/479767332/photo/idyllic-home-with-covered-porch.webp?b=1&s=170667a&w=0&k=20&c=8WsZVz6uBs31BhBJ0xzTFgbBixVyG0biRGftge7nfe4=)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className=" w-full">
                        <h1 className="my-7 text-3xl font-bold">{bannerData?.HeadLine}</h1>
                        <div className='flex text-center justify-center items-center gap-5'>
                            <div className='w-[150px] h-[2px] opacity-50 bg-white'></div>
                            <div className='w-[100px] opacity-50  '><img src="/assets/images/LOGO 02-01 (1).png" className='' alt="" /></div>
                            <div className='w-[150px]  h-[2px] opacity-50 bg-white'></div>
                        </div>
                        <p className='mb-5'>{bannerData?.subTitle}</p>
                        <div className="bg-gray-100 rounded-lg p-5  grid grid-cols-1 md:grid-cols-3">
                            {
                                bannerData?.Action?.map((items: any) => {
                                    return items?.type === 'text' ? (

                                        <div className="p-3">
                                            <label className="label">
                                                <span className="label-text">{items?.title}</span>
                                            </label>

                                            <input onChange={(e) => items?.onChange(e)} type={items?.type} placeholder="Search Your Location" className="input input-bordered rounded-lg w-full   max-w-xs " />
                                        </div>
                                    ) : (<div className="p-3">
                                        <label className="label">
                                            <span className="label-text">{items?.title}</span>
                                        </label>
                                        <select onChange={(e) => items?.onChange(e)} className='w-full p-2 border-2 rounded-lg text-black ' name="" id="">

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