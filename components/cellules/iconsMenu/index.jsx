import Image from 'next/image'
import React from 'react'

function IconsMenu() {
  return (
    <div className="flex flex-col border-b-2 border-transparent hover:border-neutral-800 pb-[10px] items-center">
    <Image src="/i1.png" width={24} height={24} alt="icon"/>
    <span className="text-[12px] mt-[3px] mb-[5px]">Bord de mer</span>
  </div>
  )
}

export default IconsMenu