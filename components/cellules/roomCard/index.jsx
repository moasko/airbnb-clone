import Image from 'next/image'
import React from 'react'

function RoomCard(props) {

  const {image} = props
  return (
    <div>
    <div className="flex flex-col">
      {/* image part */}
      <div>
        <div className="w-full relative h-64 overflow-hidden rounded-xl">
          <Image className='object-cover' src={image!=undefined?image:"/1.webp"} fill={true} alt="e"></Image>
        </div>
      </div>

      {/* content part */}
      <div className="flex flex-col">
        <h2 className="text-[#222222] font-semibold">
          Thohoyandou, Afrique du Sud
        </h2>
        <h2 className="text-[#717171]">En bordure de lac</h2>
        <h2 className="text-[#717171]">2–7 janv., · Professionnel</h2>
        <h2 className="text-[#222222] font-medium">130 € par nuit</h2>
      </div>

    </div>
  </div>
  )
}

export default RoomCard