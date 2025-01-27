import React from 'react'
import tokenbg from "../assets/images/png/token-bg.png"
import { TOKEN_INFO_LIST } from '../utils/helper';

const Token = () => {
    return (
        <div id='token' className="bg-cover bg-no-repeat bg-center -mt-1 xl:pt-[130px] lg:py-20 md:pb-16 pt-6 pb-12 xl:pb-[136px]"
            style={{ backgroundImage: `url(${tokenbg})` }}>
            <div className="container">
                <h2 className="font-bold lg:text-5xl md:text-4xl text-3xl text-white leading-custom-xl max-lg:text-center text-center lg:pb-[59px] md:pb-10 pb-6">
                    <span className="bg-gradient-to-tl from-sky to-purple bg-clip-text text-transparent">
                        $GILD </span> Token Info </h2>
                <div className='flex items-center flex-wrap -mx-3 justify-center'>
                    {TOKEN_INFO_LIST.map(function (item, i) {
                        return <div key={i} className='w-1/4 max-md:w-1/3 max-sm:w-1/2 px-3 max-sm:px-2 max-md:pt-6 max-sm:pt-4'>
                            <div className='bg-gradient-to-b h-full from-white/20 to-white/10 p-[1px] rounded-[13px]'>
                                <div className='bg-gradient-to-b from-gray to-darkGray h-[181px] max-sm:h-36 hover:bg-gradient-to-br cursor-pointer hover:from-purple hover:to-sky max-h-[181px] flex items-center justify-center flex-col py-[18px] rounded-[13px] shadow'>
                                    <img src={item.image} alt={item.imageAlt} className='h-[70px] max-lg:h-12 max-sm:h-10 pointer-events-none' />
                                    <p className='font-bold text-3xl max-lg:text-2xl max-sm:text-xl leading-custom-xl text-white pt-[10px] pb-1 max-lg:pb-0 text-center'>{item.title}</p>
                                    <p className='text-lg max-lg:text-base max-sm:text-sm leading-custom-xl text-white'>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
};

export default Token;
