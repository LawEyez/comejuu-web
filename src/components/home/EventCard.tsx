import React from 'react'

import { getDate } from '@/utils/helpers'
import Link from 'next/link'

type EventCardProps = {
  title: string
  date: string
  time: string
}

const EventCard: React.FC<EventCardProps> = ({ title, date, time }) => {
  const { day, monthName } = getDate(date)
  return (
    <div className='p-2 border border-secondary/15 rounded-xl w-[285px] gap-5 flex flex-col'>
      <div className="bg-secondary text-white p-3 w-14 min-w-12 rounded-lg">
        <p className="text-lg font-semibold">{day}</p>
        <p className="text-sm uppercase">{monthName}</p>
      </div>

      <div className="px-3 pb-3">
        <h5 className="text-primary font-bold text-xl">{title}</h5>
        <p className="text-neutral-dark text-base">{time}</p>
        <Link href='/' className='text-sm underline'>Learn more</Link>
      </div>
    </div>
  )
}

export default EventCard
