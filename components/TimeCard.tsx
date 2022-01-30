import Image from 'next/image'
import { img_key_map } from '../maps/img_key_map'
import { color_map } from '../maps/color_map'
import { useEffect, useState } from 'react'

function TimeCard({ title, time, unit }) {
  const imgKey = img_key_map[title]
  const color = color_map[title]

  return (
    <section className="relative">
      <div
        style={{ background: color }}
        className="h-36 w-80 overflow-hidden rounded-2xl p-4 sm:h-44"
      >
        <div className="relative ml-48 -mt-6 h-20 w-28">
          <Image
            src={`/images/icon-${imgKey}.svg`}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div
        className="absolute top-10 flex h-36
    w-80 flex-col rounded-2xl bg-blue-900 sm:h-44"
      >
        <div className="flex items-center justify-between px-6 pt-6 sm:mx-4">
          <h1 className="font-white text-lg font-bold text-white sm:font-normal">
            {title}
          </h1>
          <div className="relative h-2 w-4">
            <Image
              src="/images/icon-ellipsis.svg"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        <div className="flex items-center justify-between px-5 pt-3 sm:mx-4 sm:flex-col sm:place-items-start">
          <h1 className="text-4xl text-white sm:text-6xl sm:font-light">
            {time.current}hrs
          </h1>
          <h2 className="text-white opacity-60 sm:mt-2">
            Last {unit} - {time.previous}hrs
          </h2>
        </div>
      </div>
    </section>
  )
}

export default TimeCard
