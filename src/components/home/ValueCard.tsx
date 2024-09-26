import React from 'react'
import Image from 'next/image'

type ValueCardProps = {
  name: string
  description: string
  idx: number
}

const ValueCard: React.FC<ValueCardProps> = ({ name, description, idx }) => {
  return (
    <div className="relative h-[350px] md:h-[40vh] overflow-hidden rounded-2xl">
      <Image
        src='https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        width={1920}
        height={1280}
        alt=''
        className='absolute w-full h-full object-cover'
      />

      <div className="relative w-full h-full bg-black/70 p-7 text-white
      flex items-center">
        <div className="container">
          <div className="w-full sm:w-1/2 flex items-start gap-5 md:gap-8">
            <span className="text-6xl sm:text-8xl lg:text-9xl text-white/50 font-black font-secondary">{idx}</span>
            <div className="space-y-5">
              <h3 className="text-2xl sm:text-3xl font-semibold font-secondary">{name}</h3>
              <p className="text-sm sm:text-base text-gray-300">{description}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ValueCard