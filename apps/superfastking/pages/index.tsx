/** @format */

import Head from 'next/head';
import Link from 'next/link';
import { Contents, Dates, Markets, RecordCharts } from 'ui';

export default function Web() {
  return (
    <main className='text-center border-4 bg-teal-500 border-black border-indigo-500/75 p-2 space-y-4'>
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
      <header className='flex bg-sky-400 font-bold gap-3 sticky top-0 z-50 text-xl'>
        <p className='w-full border rounded border-black'>
          <Link href='/'>HOME</Link>
        </p>

        <p className='w-full border rounded border-black'>
          <Link href='#chart'>CHART</Link>
        </p>
        <p className='w-full border rounded border-black'>
          <Link href='#table'>TABLE</Link>
        </p>
      </header>

      <div className='space-y-2'>
        {Contents.map((content) => (
          <>
            <p className='font-mono font-bold'>{content.contentkey}</p>
            <p className='italic text-xl'>{content.contentkeyword}</p>
          </>
        ))}
        <div className='border-2 border-black rounded-lg font-extrabold font-mono bg-white'>
          <p className='text-xl text-blue-700 rounded-lg '>
            💫Today Lucky Number💫
          </p>
          <div className='grid grid-cols-3 p-2'>
            {Markets.map((market) => (
              <div
                className={`${
                  market.isPremium
                    ? 'p-2 hover:bg-sky-300 border-r-4 border-indigo-500/75'
                    : 'hidden'
                }`}>
                <p className='text-xl text-blue-700 '>{market.name}</p>
                <p className='text-xl'>{market.newResult}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='space-y-2 italic'>
        {Contents.map((content) => (
          <div
            className={`${
              content.isContent
                ? 'border-2 rounded-lg border-indigo-500/75 p-2'
                : 'hidden'
            }`}>
            <p className=''>{content.lineA}</p>
            <p className=''>{content.lineB}</p>
            <p className=''>{content.lineC}</p>
            <p className=''>{content.line1}</p>
            <p className=''>{content.line2}</p>
            <div className='grid grid-cols-2 gap-3'>
              <p
                className='border-4 border-indigo-500/75 font-bold text-blue-700 bg-white rounded p-2'
                title='VERIFIED'>
                {content.name}
              </p>
              <p
                className='border-4 border-indigo-500/75 font-bold text-blue-700 bg-white rounded p-2'
                title='VERIFIED'>
                {content.contact}
              </p>
            </div>
          </div>
        ))}
      </div>
      <section id='chart'>
        <div className='border-2 rounded-lg border-indigo-500/75 bg-white'>
          <p className='text-xl font-extrabold'>☔LIVE RESULTS☔</p>
          <div className='grid grid-cols-2 p-2'>
            {Markets.map((market) => (
              <div
                className={`${
                  market.isPremium
                    ? 'bg-yellow-300 border rounded'
                    : 'border rounded'
                }${market.isActive ? '' : 'hidden'}`}>
                <p className='text-xl text-blue-700 font-bold'>{market.name}</p>
                <p className='font-mono'>{market.time}</p>
                <p className='font-mono'>
                  {market.oldResult} ⟹ {market.newResult}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id='table'>
        <div className='border-2 p-2 rounded-lg border-indigo-500/75 space-y-2 bg-white'>
          <div className='font-extrabold text-blue-700 text-xl flex gap-3'>
            RECORDS
            {Dates.map((date) => (
              <p className=''>{date.date}</p>
            ))}
          </div>
          <div className='grid grid-cols-3'>
            {Markets.map((market) => (
              <div
                className={`${
                  market.isActive ? 'border p-2 hover:bg-yellow-300' : 'hidden'
                }`}>
                <p className='text-xl font-bold '>{market.name}</p>
                <p className='font-mono'>{market.newResult}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className='space-y-2'>
        <div className='border-2 rounded-lg  border-black font-bold'>
          <p className='text-xl font-mono'>RECORD CHART</p>
          <div className='grid grid-cols-2 gap-3 p-2'>
            {RecordCharts.map((recordchart) => (
              <a href='#'>
                <p className='text-blue-700 border-indigo-500/75 border p-2 rounded bg-white'>
                  {recordchart.chart}
                </p>
              </a>
            ))}
          </div>
        </div>
        <div className='border-2 rounded-lg  border-black p-2 space-y-2'>
          {Contents.map((content) => (
            <>
              <p className='font-extrabold font-mono text-xl'>
                {content.contentHead}
              </p>
              <p className='italic'>{content.contentPara}</p>
            </>
          ))}
        </div>
      </div>
    </main>
  );
}
