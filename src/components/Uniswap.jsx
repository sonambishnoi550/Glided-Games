import React from 'react';
import uniswapbg from "../assets/images/png/uniswap-bg.png";
import uniswap from "../assets/images/svg/button-uniswap.svg"
import uniswapBox from "../assets/images/png/uniswap-box.png"
const Uniswap = () => {
 const UNISWAP_LIST = [
        "100,000+ Airdrop", "NFT $GILD giveaway", "Announcement and Games"
    ]

    return (
        <div className="-mt-1 bg-center bg-cover bg-no-repeat xl:pt-[220px] lg:pt-[150px] md:py-20 max-sm:pb-2 py-12 xl:pb-[150px] lg:pb-[100px]"
            style={{ backgroundImage: `url(${uniswapbg})` }} >
            <div className="container">
                <div className="md:flex justify-between max-w-[1133px] mx-auto">
                    <div>
                        <h2 className="font-bold lg:text-5xl md:text-4xl text-3xl text-white leading-custom-xl max-lg:text-center text-center pb-[21px]">
                            Buy On <span className="text-sky">Uniswap</span> </h2>
                        <ul className='list-disc pl-6'>
                            {UNISWAP_LIST.map(function (item, i) {
                                return <li key={i} className='josefin text-xl max-md:text-lg max-md:pb-2 max-sm:pb-1 leading-[25.5px] text-white pb-[11px]'>{item}</li>
                            })}
                        </ul>  
                        <a href="#discord" className="flex items-center max-sm:mx-auto text-2xl gap-[10px] mt-[30px] px-[10.9px] py-[14px] text-white w-[170px] button-gradient rounded-[79px] hover:scale-110 transition-all duration-500"
                        > <img src={uniswap} alt="buy now Icon" className="w-6 h-6" loading="lazy" /> Buy Now</a>
                    </div>
                    <img className='md:max-w-[341px] max-w-[285px] max-sm:mt-10' src={uniswapBox} alt="box" />
                </div>
            </div>
        </div>
    );
};

export default Uniswap;
