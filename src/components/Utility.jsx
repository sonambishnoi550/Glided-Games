import React from 'react'
import Girl from "../assets/images/png/utility-girl.png"
import utilitybg from "../assets/images/png/utility-bg.png"
const Utility = () => {
  return (
    <div className=' bg-cover bg-center xl:pb-[194px] md:pb-10 -mt-1' style={{ backgroundImage: `url(${utilitybg})` }}>
      <div className="container">
        <div className='lg:flex xl:pt-[105px] items-center justify-between'>
          <div className='lg:pt-[101px] pt-10'>
            <h3 className='font-bold text-5xl text-white leading-[127%] pb-4 max-lg:text-center'> <span className='bg-gradient-to-tl from-[#815ccb] to-[#1babfe] bg-clip-text text-transparent'>NFT</span> Utility</h3>
            <p className='text-white/80 ff-poppins font-normal md:text-xl text-base leading-[179%] lg:max-w-[649px] lg:text-left text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin curabitur iaculis id cursus dignissim. Volutpat placerat volutpat commodo id ultricies volutpat vestibulum. Egestas venenatis dignissim fames maecenas. Blandit orci consectetur mauris, ipsum viverra quisque. Vulputate sollicitudin tellus eget consequat lectus dignissim integer in vitae. Commodo integer dis tortor cras maecenas sit. Et nunc et platea elementum, cursus morbi. Placerat molestie nibh parturient lectus magna sed fusce diam urna. Quam magna duis imperdiet posuere iaculis.</p>
          </div>
          <div>
            <img className='md:max-w-[369px] max-lg:mx-auto md:h-[639px] object-cover max-lg:mt-10' src={Girl} alt="girl" />
          </div>
        </div>
          </div>
    </div>
  )
}

export default Utility