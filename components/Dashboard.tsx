import Image from 'next/image'
import { useState } from 'react'

import data from '/public/json/data.json'
import TimeCard from './TimeCard'

function Dashboard() {
  const [category, setCategory] = useState('weekly')

  const unit_map = {
    weekly: 'week',
    daily: 'day',
    monthly: 'month',
  }

  const onClick = (event) => {
    setCategory(event.target.outerText.toLowerCase())
  }

  return (
    <main className="mb-16 grid grid-cols-1 gap-y-20 sm:grid-cols-6">
      <section className="relative mx-auto flex flex-col sm:col-span-1 sm:col-start-2 sm:mr-2">
        <div
          className="z-50 flex h-36 w-80 items-center
        gap-x-6 rounded-2xl bg-[#5847eb] p-4 sm:h-80 sm:flex-col sm:place-items-start"
        >
          <div className="relative h-20 w-20 rounded-full border-2 border-white sm:mt-5 sm:ml-4 sm:h-28 sm:w-28 sm:border-4">
            <Image
              objectFit="contain"
              src="/images/image-jeremy.png"
              layout="fill"
            />
          </div>
          <div>
            <h2
              className="text-xl text-white
            opacity-60 sm:ml-4 sm:mt-6 sm:text-sm"
            >
              Report for
            </h2>
            <h1 className="text-2xl text-white sm:hidden">Jeremy Robson</h1>
            <div className="ml-4 hidden flex-col text-4xl text-white sm:inline-flex">
              <h1>Jeremy</h1>
              <h1>Robson</h1>
            </div>
          </div>
        </div>
        <div
          className="absolute top-16 flex h-36 w-80
        flex-col justify-end rounded-2xl bg-[#1c1f4a] sm:top-36 sm:-mt-2 sm:h-80"
        >
          <div className="flex justify-between py-5 px-6 text-xl text-white sm:-mb-2 sm:ml-2 sm:flex-col sm:gap-y-4">
            <h2
              className={`opacity-${
                category === 'daily' ? 100 : 60
              } cursor-pointer hover:opacity-100`}
              onClick={onClick}
            >
              Daily
            </h2>
            <h2
              className={`opacity-${
                category === 'weekly' ? 100 : 60
              } cursor-pointer hover:opacity-100`}
              onClick={onClick}
            >
              Weekly
            </h2>
            <h2
              className={`opacity-${
                category === 'monthly' ? 100 : 60
              } cursor-pointer hover:opacity-100`}
              onClick={onClick}
            >
              Monthly
            </h2>
          </div>
        </div>
      </section>

      <section className="gridcols-1 relative mx-auto grid gap-y-12 sm:col-span-3 sm:col-start-3 sm:ml-4 sm:grid-cols-3 sm:gap-y-16 sm:gap-x-5">
        {data.map((d) => (
          <TimeCard
            key={d.title}
            title={d.title}
            time={d.timeframes[category]}
            unit={unit_map[category]}
          />
        ))}
      </section>
    </main>
  )
}

export default Dashboard

export const getStaticProps = async () => {
  return {
    props: {
      data,
    },
  }
}
