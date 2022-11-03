/** @format */

import Head from 'next/head';
import Link from 'next/link';
import { Button } from 'ui';
import { Markets, Contents, Dates, RecordCharts } from 'ui';

export default function Web() {
  return (
    <main className='text-center p-2 space-y-4 bg-white w-full border font-serif '>
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
      <div className='sticky top-0 z-50'>
        <div className='flex '>
          <p className='border-2 rounded bg-zinc-500 w-full'>
            <Link href='/'>HOME</Link>
          </p>
          <p className='border-2 rounded bg-zinc-500 w-full'>
            <Link href='#chart'>CHART</Link>
          </p>
          <p className='border-2 rounded bg-zinc-500 w-full'>
            <Link href='#table'>Table</Link>
          </p>
        </div>
      </div>

      <div className='rounded-lg bg-zinc-500 border-2 p-2'>
        {Markets.map((market) => (
          <div className={`${market.isPremium ? '' : 'hidden'}`}>
            <p className='text-xl text-white font-bold'>{market.name}</p>
            <p className=''>{market.newResult} </p>
          </div>
        ))}
      </div>

      <div className=' flex flex-col'>
        {Contents.map((content) => (
          <div
            className={`${
              content.isContent
                ? 'border-2 p-2 rounded-lg bg-zinc-500'
                : 'hidden'
            }`}>
            <p>{content.lineA}</p>
            <p>{content.line1}</p>
            <p>{content.line2}</p>
            <p>{content.lineB}</p>
            <p title='VERIFIED'>{content.contact}</p>
            <p title='VERIFIED'>{content.name}</p>
          </div>
        ))}
      </div>

      <section id='chart'>
        <div className='border-2 rounded-lg bg-zinc-500 p-2'>
          <p className='text-xl'>LIVE RESULTS</p>

          <div className='grid grid-cols-2 gap-1 p-2 lg:grid-cols-5 '>
            {Markets.map((market) => (
              <div
                className={`${
                  market.isPremium ? 'rounded border bg-white' : ''
                }`}>
                <p className=''>{market.name}</p>
                <p className=''>{market.time}</p>
                <p className=''>
                  {market.oldResult} ➡️ {market.newResult}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id='table'>
        <div className='border-2 rounded-lg bg-zinc-500 p-2'>
          <p className='text-xl'>TABLES</p>
          {Dates.map((date) => (
            <p className='text-xl'>{date.date}</p>
          ))}
          <div className='grid grid-cols-2 gap-1 p-2 bg-white rounded'>
            {Markets.map((market) => (
              <div>
                <p className=''>{market.name}</p>
                <p className=''>{market.newResult}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className='space-y-2'>
        <div className='border border-black rounded-lg p-2 font-bold '>
          <p className='text-xl border rounded text-blue-500 bg-yellow-500'>
            RECORD CHART
          </p>
          {RecordCharts.map((recordchart) => (
            <p>
              <a href='#'>{recordchart.chart}</a>
            </p>
          ))}
        </div>
        <div className='border-2 rounded-lg p-2 bg-zinc-500'>
          {Contents.map((content) => (
            <div className={`${content.isActive ? '' : 'hidden'}`}>
              <p className='text-2xl underline'>{content.contentHead}</p>
              <p className='m-2'>{content.contentPara}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
