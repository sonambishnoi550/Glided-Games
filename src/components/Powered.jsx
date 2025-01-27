import React from 'react';
import { POWERED_LIST } from '../utils/helper';

const Powered = () => {

    return (
        <div className='-mt-1 xl:pt-[130px] lg:py-20 md:pb-16 md:pt-2 py-12 xl:pb-[136px] bg-black'>
            <div className="container">
                <h2 className='font-bold lg:text-5xl md:text-4xl text-3xl text-white leading-custom-xl max-lg:text-center text-center xl:pb-[68px] md:pb-12 pb-6'>
                    <span className='bg-gradient-to-tl from-sky to-purple bg-clip-text text-transparent'>Powered</span> By:
                </h2>
                <div className='flex flex-wrap -mx-3 justify-center'>
                    {POWERED_LIST.map((item, i) => (
                        <div key={i} className='w-1/4 max-xl:w-1/3 max-md:!w-1/2 max-sm:!w-full px-[10.5px] max-2xl:pt-[21px] max-sm:pt-4'>
                            <div className='bg-gradient-to-r h-full from-white/20 to-white/10 p-[1px] rounded-[13px]'>
                                <div className='bg-gradient-to-r px-5 from-gray to-darkGray h-[181px] max-sm:h-36 hover:bg-gradient-to-br cursor-pointer hover:from-purple hover:to-sky  flex items-center justify-center py-[18px] rounded-[13px] shadow'>
                                    <img
                                        src={item.image}
                                        alt={item.imageAlt}
                                        className={`${item.sizeClass} object-cover pointer-events-none`}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Powered;
