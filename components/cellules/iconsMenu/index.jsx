import Image from 'next/image'
import React from 'react'

function IconsMenu() {
  return (
    <div className='flex-shrink-0 inline-table'>
      <div className="flex flex-col border-b-2 border-transparent opacity-60 hover:opacity-100 hover:border-neutral-300 pb-[10px] items-center">
    <Image src="/i1.png" width={24} height={24} alt="icon"/>
    <span className="text-[12px] mt-[3px] mb-[5px]">Bord de mer</span>
  </div>
    </div>
    
  )
}

export default IconsMenu