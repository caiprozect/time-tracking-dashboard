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

  return (
    <main className="mb-16 grid grid-cols-1 space-y-20">
      <section className="relative mx-auto flex flex-col">
        <div
          className="z-50 flex h-36 w-80
        items-center gap-x-6 rounded-2xl bg-blue-500 p-4"
        >
          <div className="relative h-20 w-20 rounded-full border-2 border-white">
            <Image
              objectFit="contain"
              src="/images/image-jeremy.png"
              layout="fill"
            />
          </div>
          <div>
            <h2
              className="text-xl
            text-white opacity-60"
            >
              Report for
            </h2>
            <h1 className="text-2xl text-white">Jeremy Robson</h1>
          </div>
        </div>
        <div
          className="absolute top-16 flex h-36
        w-80 flex-col justify-end rounded-2xl bg-blue-900"
        >
          <div className="flex justify-between py-5 px-6 text-xl text-white">
            <h2 className={`opacity-${category === 'daily' ? 100 : 60}`}>
              Daily
            </h2>
            <h2 className={`opacity-${category === 'weekly' ? 100 : 60}`}>
              Weekly
            </h2>
            <h2 className={`opacity-${category === 'monthly' ? 100 : 60}`}>
              Monthly
            </h2>
          </div>
        </div>
      </section>

      <section className="gridcols-1 relative mx-auto grid gap-y-12">
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
