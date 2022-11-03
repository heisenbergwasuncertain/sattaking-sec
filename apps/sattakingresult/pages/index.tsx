/** @format */

import Head from 'next/head';
import Link from 'next/link';
import { Button } from 'ui';
import { Markets, Contents, Dates, RecordCharts } from 'ui';

export default function Web() {
  return (
    <main className='text-center p-2 space-y-4 bg-yellow-600'>
      <Head>
        <title>
          Satta king chart, Satta king, live Gali satta, Deshawar live result,
          Gali live result, Satta matka, Satta matka king, Satta king up, Satta
          king 2020 chart, Satta king desawar, Satta king gali, Gali live
          result, Disawar live result, Satta Number, Satta Game, Gali Number,
          Delhi Satta king, Satta Bazar, Black satta king, Gali Single Jodi,
          Black Satta Result, Desawar Single Jodi.
        </title>
      </Head>
      <div className='sticky top-0 z-50'>
        <div className='flex font-bold bg-yellow-500'>
          <p className='border-2 w-full rounded '>
            <Link href='/'>HOME</Link>
          </p>
          <p className='border-2 w-full rounded '>
            <Link href='#chart'>CHART</Link>
          </p>
          <p className='border-2 w-full rounded '>
            <Link href='#table'>TABLE</Link>
          </p>
        </div>
      </div>

      <div>
        {Contents.map((content) => (
          <p className='italic bg-gray-500'>{content.contentkeyword}</p>
        ))}
        <div className='mt-2' />
        {Markets.map((market) => (
          <div
            className={`${
              market.isPremium
                ? ' p-2 font-bold border-red-700 font-mono bg-yellow-500 border rounded-lg'
                : 'hidden'
            }`}>
            <p className='text-2xl text-blue-500'>{market.name}</p>
            <p className='text-red-700'>{market.newResult}</p>
          </div>
        ))}
      </div>

      <div>
        {Contents.map((content) => (
          <div
            className={`${
              content.isContent
                ? 'border-4 border-red-700 rounded-lg p-2 font-bold'
                : 'hidden'
            }`}>
            <p className=''>{content.lineA}</p>
            <p className=''>{content.lineB}</p>
            <p className=''>{content.line1}</p>
            <p className=''>{content.line2}</p>
            <p className=''>{content.line3}</p>
            <p
              className='text-xl text-blue-500 font-mono'
              title='VERIFIED'>
              {content.name}
            </p>
            <p
              className='text-xl text-blue-500 font-mono'
              title='VERIFIED'>
              {content.contact}
            </p>
          </div>
        ))}
      </div>

      <section id='chart'>
        <div className='font-bold font-mono border-4 border-red-700 rounded-lg p-2'>
          <h1 className='text-white text-center font-bold text-xl italic'>
            WORLD ME SABSE FAST SATTA MATKA RESULT
          </h1>
          <div className=' grid grid-cols-3 gap-1 p-2 sm:grid-cols-5 lg:grid-cols-8 '>
            {Markets.map((market) => (
              <div
                className={`${
                  market.isPremium
                    ? 'bg-yellow-500 border rounded'
                    : 'border rounded'
                } ${market.isActive ? '' : 'hidden'}`}>
                <p className='text-blue-500 text-xl'>{market.name}</p>
                <p className=''>{market.time}</p>
                <p className='text-red-700'>
                  {market.oldResult} 🔛 {market.newResult}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id='table'>
        <div className='overflow-x-auto bordero grid w-full grid-flow-col gap-2  '>
          {Markets.map((market) => (
            <div className='flex flex-col'>
              <div className='whitespace-nowrap bg-white border-2 border-black p-2 mb-2 font-extrabold text-pink-500 rounded-lg shadow-xl'>
                {market.name}
              </div>
              <div className='bg-white w-full flex border-2 border-black justify-center items-start font-extrabold text-pink-500 rounded-lg shadow-xl'>
                <div className='text-black shrink w-0 my-1 mx-2 flex items-start justify-start text-sm  '>
                  {Dates.map((date) => (
                    <p
                      className='bg-red-100 px-2 border rounded-full'
                      title='DATE'>
                      {date.date}
                    </p>
                  ))}
                </div>
                <div className='text-blue-400 grow w-20 text-5xl  items-center justify-center m-2 p-2 '>
                  {market.newResult}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className='space-y-4'>
        <div className='border rounded p-2 font-bold '>
          <p className='text-xl border rounded text-blue-500 bg-yellow-500'>
            RECORD CHART
          </p>
          {RecordCharts.map((recordchart) => (
            <p className=''>
              <a href='#'>{recordchart.chart}</a>
            </p>
          ))}
        </div>
        <div className='border-2 rounded-lg border-red-700 p-2 font-bold space-y-2'>
          {Contents.map((content) => (
            <div
              className={`${
                content.isActive ? 'border  rounded p-2' : 'hidden'
              }`}>
              <p className='text-xl underline text-red-700'>
                {content.contentHead}
              </p>
              <p className='italic'>{content.contentPara}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
