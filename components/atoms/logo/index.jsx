import Image from 'next/image'
import React from 'react'

function Logo() {
  return (
    <div className='h-[80px] flex items-center'>
        <Image width={105} height={32} src={"/logo.png"} alt="logo"/>
    </div>
  )
}

export default Logo