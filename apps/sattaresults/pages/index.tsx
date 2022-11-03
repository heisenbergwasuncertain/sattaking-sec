/** @format */

import Head from 'next/head';
import Link from 'next/link';
import { Button } from 'ui';
import { Contents, Markets, Dates, RecordCharts } from 'ui';

export default function Web() {
  return (
    <main className='text-center space-y-4 border-4 border-black '>
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
      <div className='mt-2 sticky top-0 z-20'>
        <div className='font-bold flex bg-white gap-3 w-full'>
          <p className='w-full border'>
            <Link href='/'>HOME</Link>
          </p>
          <p className='w-full border'>
            <Link href='#chart'>CHART</Link>
          </p>
          <p className='w-full border'>
            <Link href='#table'>TABLE</Link>
          </p>
        </div>
      </div>

      <div className='p-2 bg-sky-300 space-y-4 text-center '>
        <div className='space-y-2'>
          {Contents.map((content) => (
            <p className='italic'>{content.contentkeyword}</p>
          ))}
          <div className='border-2 p-2 rounded-lg border-black font-bold'>
            LIVE RESULT AAJ KA TRENDING
            <div className='grid grid-cols-3 gap-3 p-2'>
              {Markets.map((market) => (
                <div
                  className={`${
                    market.isPremium
                      ? 'hover:bg-white rounded border p-2'
                      : 'hidden'
                  }`}>
                  <p className='font-mono text-xl text-yellow-700'>
                    {market.name}
                  </p>
                  <p className='text-red-500 '>{market.newResult}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='space-y-2'>
          {Contents.map((content) => (
            <div
              className={`${
                content.isContent
                  ? 'space-y-2 p-2 rounded-lg font-bold border-2 border-black'
                  : 'hidden'
              }`}>
              <p className=''>{content.lineA}</p>
              <p className=''>{content.lineB}</p>
              <p className=''>{content.lineC}</p>
              <p className=''>{content.line1}</p>
              <p className=''>{content.line2}</p>
              <p className=''>{content.line3}</p>
              <div className='font-mono grid gap-3 grid-cols-2'>
                <p
                  className='hover:bg-white border rounded p-2 text-yellow-700 text-xl'
                  title='VERIFIED'>
                  {content.name}
                </p>
                <p
                  className='hover:bg-white border rounded p-2 text-red-500'
                  title='VERIFIED'>
                  {content.contact}
                </p>
              </div>
            </div>
          ))}
        </div>

        <section id='chart'>
          <div className='font-bold border-2 border-black rounded-lg p-2'>
            <p className='border rounded bg-white text-xl font-extrabold'>
              LIVE RESULT
            </p>
            <div className='grid grid-cols-3 gap-3 p-2'>
              {Markets.map((market) => (
                <div
                  className={`${
                    market.isPremium
                      ? 'border rounded-lg font-extrabold font-mono text-yellow-700 bg-white p-2'
                      : 'border rounded border-green-500 text-red-800 hover:bg-green-500'
                  }${market.isActive ? ' ' : 'hidden'}`}>
                  <p className='text-xl'>{market.name}</p>
                  <p className=''>{market.time}</p>
                  <p className=''>
                    {market.oldResult} ⇌ {market.newResult}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id='table'>
          <div className='border-2 rounded-lg border-black'>
            <div className='p-2 font-extrabold text-yellow-700 flex gap-3 text-xl'>
              <p className=''>RESULTS</p>
              {Dates.map((date) => (
                <p className=''>{date.date}</p>
              ))}
            </div>
            <div className='grid grid-cols-2 p-2 font-bold font-mono gap-3'>
              {Markets.map((market) => (
                <div
                  className={`${
                    market.isActive
                      ? 'border border-green-500 rounded hover:bg-green-500'
                      : 'hidden'
                  }`}>
                  <p className='text-xl text-red-800'>{market.name}</p>
                  <p className=''>{market.newResult}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className='border-2 border-black space-y-2 rounded-lg p-2'>
          <p className='border rounded text-xl font-extrabold bg-white'>
            RECORD CHART
          </p>
          <div className='grid grid-cols-2 items-center justify-center gap-3'>
            {RecordCharts.map((recordchart) => (
              <div
                className={`${
                  recordchart.isActive
                    ? 'hover:bg-white text-yellow-700 font-bold'
                    : 'hidden'
                }`}>
                <a href='#'>
                  <p className='border rounded'>{recordchart.chart}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className='border-2 border-black space-y-2 rounded-lg p-2 '>
          {Contents.map((content) => (
            <div className={`${content.isActive ? 'space-y-2' : 'hidden'}`}>
              <p className='font-extrabold font-mono text-xl'>
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
