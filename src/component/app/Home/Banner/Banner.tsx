import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg w-full">
                        <h1 className="mb-5  text-3xl font-semibold">Find Your Home</h1>
                        <p className='mb-5'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

                      
                   
                   <div className="bg-gray-200  grid grid-cols-1 md:grid-cols-3">
   
    <div className="p-4">
        <label className="label">
            <span className="label-text">Location</span>
        </label>
        <input type="text" placeholder="Search Your Location" className="input input-bordered w-full mb-2 p-2 max-w-xs rounded-none" />
    </div>

    <div className="p-5">
        <label className="label">
            <span className="label-text">Bathrooms</span>
        </label>
        <select className='w-full p-2 mb-2 text-black' name="" id="">
            <option value="option1">1</option>
            <option value="option1">2</option>
            <option value="option1">3</option>
        </select>
    </div>

  
     <div className="p-5">
        <label className="label">
            <span className="label-text">Bathrooms</span>
        </label>
        <select className='w-full p-2 mb-2 text-black' name="" id="">
            <option value="option1">1</option>
            <option value="option1">2</option>
            <option value="option1">3</option>
        </select>
    </div>
    <div className="p-4">
        <label className="label">
            <span className="label-text">Location</span>
        </label>
        <input type="text" placeholder="Search Your Location" className="input input-bordered w-full mb-2 p-2 max-w-xs rounded-none" />
    </div>
    <div className="p-4">
        <label className="label">
            <span className="label-text">Location</span>
        </label>
        <input type="text" placeholder="Search Your Location" className="input input-bordered w-full mb-2 p-2 max-w-xs rounded-none" />
    </div>
    <div className="p-4">
        <label className="label">
            <span className="label-text">Location</span>
        </label>
        <input type="text" placeholder="Search Your Location" className="input input-bordered w-full mb-2 p-2 max-w-xs rounded-none" />
    </div>
</div> 

          

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;