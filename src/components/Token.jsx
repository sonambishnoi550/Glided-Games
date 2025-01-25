import React from 'react'
import tokenbg from "../assets/images/png/token-bg.png"
import billion from "../assets/images/svg/billion.svg"
import sale from "../assets/images/svg/sale.svg"
import nft from "../assets/images/svg/nft.svg"
import holder from "../assets/images/svg/holder.svg"
const Token = () => {
  return (
      <div className='bg-cover bg-no-repeat bg-center -mt-1 xl:pt-[130px] lg:py-20 md:py-16 py-12 xl:pb-[136px]' style={{ backgroundImage: `url(${tokenbg})` }}>
          <div className="container">
              <h2 className='font-bold lg:text-5xl md:text-4xl text-3xl text-white leading-custom-xl max-lg:text-center text-center pb-[59px]'> <span className='bg-gradient-to-tl from-purple to-sky bg-clip-text text-transparent'>$GILD</span> Token Info</h2>
              <div className='flex max-xl:flex-wrap gap-6 max-xl:justify-center'>
                  <div className='pt-6 pb-[17px] xl:px-[89px] lg:px-20 px-[89px] border rounded-[13px] cursor-pointer border-white shadow-gradient transition-all duration-700'>
                      <img className='flex mx-auto'  src={billion} alt="billion" />
                      <h4 className='font-bold text-3xl leading-custom-xl text-center text-white pt-[9px]'>3 BIllion</h4>
                      <p className='font-normal text-lg leading-custom-xl text-center text-white whitespace-nowrap'>GILD Token Info</p>
                  </div>
                  <div className='pt-[30px] pb-[17px] border px-[50px] rounded-[13px] cursor-pointer border-white shadow-gradient transition-all duration-700'>
                      <img className='flex mx-auto' src={sale} alt="sale" />
                      <h4 className='font-bold text-3xl leading-custom-xl text-center text-white pt-[13px] whitespace-nowrap'>Pre Sale Token</h4>            
                  </div>
                  <div className='pt-6 pb-[17px] pl-[95px] pr-[89px] border rounded-[13px] cursor-pointer border-white shadow-gradient transition-all duration-700'>
                      <img className='flex mx-auto' src={holder} alt="holder" />
                      <h4 className='font-bold text-3xl leading-custom-xl text-center text-white pt-[9px]'>100,000+</h4>
                      <p className='font-normal text-lg leading-custom-xl text-center text-white'>Holders</p>
                  </div>
                  <div className='pt-6 pb-[17px] pl-[112px] pr-[106px] border rounded-[13px] cursor-pointer border-white hover:bg-gradient-to-tl shadow-gradient transition-all duration-700'>
                      <img className='flex mx-auto' src={nft} alt="nft" />
                      <h4 className='font-bold text-3xl leading-custom-xl text-center text-white pt-[9px]'>2,500+</h4>
                      <p className='font-normal text-lg leading-custom-xl text-center text-white'>NFT Sold</p>
                  </div>
         </div>
          </div>
    </div>
  )
}

export default Token