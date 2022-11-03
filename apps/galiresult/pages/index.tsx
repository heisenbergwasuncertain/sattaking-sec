/** @format */

import Head from 'next/head';
import Link from 'next/link';
import { Markets, Contents, Dates, RecordCharts } from 'ui';

export default function Web() {
  return (
    <main className='bg-red-500 p-2 space-y-4 border-4 border-black rounded-t text-center'>
      <Head>
        <title>
          Satta king chart| Satta king live| Gali satta Deshawar live result,
          Gali live result, Satta matka, Satta matka king, Satta king up, Satta
          king 2020 chart, Satta king desawar, Satta king gali, Gali live
          result, Disawar live result, Satta Number, Satta Game, Gali Number,
          Delhi Satta king, Satta Bazar, Black satta king, Gali Single Jodi,
          Black Satta Result, Desawar Single Jodi
        </title>
      </Head>
      <header className='sticky top-0 z-50 flex font-bold'>
        <p className='bg-white border-2 rounded-lg w-full'>
          <Link href='/'>HOME</Link>
        </p>
        <p className='bg-white border-2 rounded-lg w-full'>
          <Link href='#chart'>CHART</Link>
        </p>
        <p className='bg-white border-2 rounded-lg w-full'>
          <Link href='#table'>TABLE</Link>
        </p>
      </header>

      <div className='space-y-2 bg-white rounded-lg p-2 '>
        {Contents.map((content) => (
          <p className='italic'>{content.contentkeyword}</p>
        ))}
        <p className='font-bold'>💫LIVE RESULT TRENDING💫</p>
        <div className='grid grid-cols-2 border-2 p-2 rounded-lg border-black'>
          {Markets.map((market) => (
            <div
              className={`${
                market.isPremium
                  ? 'border bg-yellow-600 p-2 rounded-lg'
                  : 'hidden'
              }`}>
              <p className='text-blue-700 font-extrabold text-xl'>
                {market.name}
              </p>
              <p className='font-mono '>{market.newResult}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='font-bold space-y-2'>
        {Contents.map((content) => (
          <div
            className={`${
              content.isContent
                ? 'border-2 rounded-lg p-2 border-black bg-white'
                : 'hidden'
            }`}>
            <p className=''>{content.lineA}</p>
            <p className=''>{content.line1}</p>
            <p className=''>{content.line2}</p>
            <p className=''>{content.line3}</p>
            <div className='grid grid-cols-2'>
              <p
                className='p-2 rounded text-blue-700'
                title='VERIFIED'>
                {content.name}
              </p>
              <p
                className='p-2 rounded text-blue-700'
                title='VERIFIED'>
                {content.contact}
              </p>
            </div>
          </div>
        ))}
      </div>

      <section id='chart'>
        <div className='border-2 rounded-lg border-black bg-white'>
          <p className='text-xl text-yellow-700 font-extrabold'>
            💫LIVE RESULT💫
          </p>
          <div className=' grid grid-cols-2 gap-1 p-2 sm:grid-cols-3 lg:grid-cols-6 '>
            {Markets.map((market) => (
              <div
                className={`${
                  market.isPremium ? ' bg-yellow-800 p-2 rounded-lg' : ''
                }${
                  market.isActive
                    ? 'border border-black p-2 rounded-lg'
                    : 'hidden'
                }`}>
                <p className='font-extrabold text-xl text-blue-700'>
                  {market.name}
                </p>
                <p className='font-mono'>{market.time}</p>
                <p className='font-mono'>
                  {market.oldResult} 🔛 {market.oldResult}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id='table'>
        <div className='border-2 rounded-lg border-black p-2'>
          {Dates.map((dates) => (
            <p className='text-blue-700 font-extrabold text-2xl italic'>
              RECORDS {dates.date}
            </p>
          ))}

          <div className=' grid grid-cols-2 gap-1 p-2 sm:grid-cols-4 lg:grid-cols-6 '>
            {Markets.map((market) => (
              <div className='hover:bg-white cursor-pointer'>
                <p className='text-blue-700 font-extrabold text-xl'>
                  {market.name}
                </p>
                <p className='font-mono'>{market.newResult}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className='border-2 rounded-lg font-bold border-black '>
        <p className='border rounded-lg bg-white text-xl p-2'>
          ⏬ RECORD CHART ⏬
        </p>
        <div className='grid grid-cols-2 p-2 items-center justify-center'>
          {RecordCharts.map((recordchart) => (
            <p className='border rounded-lg border-black text-blue-700 bg-white p-2'>
              <a href='#'>{recordchart.chart}</a>
            </p>
          ))}
        </div>
      </div>
      <div className='space-y-2'>
        {Contents.map((content) => (
          <div
            className={`${
              content.isActive
                ? 'border-2 rounded-lg font-bold border-black p-2 '
                : 'hidden'
            }`}>
            <p className='text-blue-700 text-xl font-mono underline'>
              {content.contentHead}
            </p>
            <p className='italic'>{content.contentPara}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
