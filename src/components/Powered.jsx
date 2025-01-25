import React from 'react'
import engine from "../assets/images/png/engine.png"
import uniswap from "../assets/images/png/uniswap.png"
import polygon from "../assets/images/png/polygon.png"
import coin from "../assets/images/png/coin.png"
const Powered = () => {
    return (
        <div className='-mt-1 xl:pt-[130px] lg:py-20 md:py-16 py-12 xl:pb-[136px] bg-black'>
            <div className="container">
                <h2 className='font-bold lg:text-5xl md:text-4xl text-3xl text-white leading-custom-xl max-lg:text-center text-center pb-[68px]'> <span className='bg-gradient-to-tl from-purple to-sky bg-clip-text text-transparent'>Powered</span> By:</h2>
                <div className='flex max-xl:flex-wrap gap-6 max-xl:justify-center'>
                    <div className='py-[67px] px-[19px] border rounded-[13px] cursor-pointer border-white shadow-gradient transition-all duration-700'>
                        <img className='mx-auto xl:max-w-[274px] max-w-[262px]' src={engine} alt="engine" />
                    </div>
                    <div className='py-[59px] px-[20px] border rounded-[13px] cursor-pointer border-white shadow-gradient transition-all duration-700'>
                        <img className='flex mx-auto max-w-[273px]' src={uniswap} alt="uniswap" />
                    </div>
                    <div className='py-[74px] px-[33px] border rounded-[13px] cursor-pointer border-white shadow-gradient transition-all duration-700'>
                        <img className='mx-auto max-w-[247px]' src={coin} alt="coin" />
                    </div>
                    <div className='py-[63px] px-[25px] border rounded-[13px] cursor-pointer border-white hover:bg-gradient-to-tl shadow-gradient transition-all duration-700'>
                        <img className='mx-auto max-w-[261.4px]' src={polygon} alt="polygon" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Powered