import Image from 'next/image'
import React from 'react'

function RoomCard(props) {

  const {image,price,location} = props
  return (
    <div>
    <div className="flex flex-col">
      {/* image part */}
      <div>
        <div className="w-full relative h-64 overflow-hidden rounded-xl">
<Image placeholder='blur' blurDataURL={image} className='object-cover' src={image!=null?image:"/1.webp"} fill={true} alt="e"></Image>
        </div>
      </div>

      {/* content part */}
      <div className="flex flex-col">
        <h2 className="text-[#222222] font-semibold">
          {location}
        </h2>
        <h2 className="text-[#717171]">En bordure de lac</h2>
        <h2 className="text-[#717171]">2–7 janv., · Professionnel</h2>
        <h2 className="text-[#222222] font-medium">{price}$ par nuit</h2>
      </div>

    </div>
  </div>
  )
}

export default RoomCard