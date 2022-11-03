/** @format */

import Head from 'next/head';
import Link from 'next/link';
import { Button } from 'ui';
import { Markets, Dates, Contents } from 'ui';

export default function Web() {
  return (
    <main className='flex flex-col bg-indigo-500 text-white p-2 border-4 border-yellow-800 text-center space-y-4'>
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
      <div className='sticky top-0 z-20'>
        <div className='flex bg-indigo-500'>
          <p className=' rounded-full text-center border-2  w-full'>
            <Link href=''>HOME</Link>
          </p>
          <p className=' rounded-full text-center border-2  w-full'>
            <Link href='#chart'>CHART</Link>
          </p>
          <p className=' rounded-full text-center border-2  w-full'>
            <Link href='#table'>TABLE</Link>
          </p>

          <p className=' rounded-full text-center border-2  w-full'>
            <Link href='#contact'>Contact</Link>
          </p>
        </div>
      </div>

      <div className='border-2 rounded'>
        {Markets.map((market) => (
          <div className={`${market.isPremium ? '' : 'hidden'}`}>
            <p className='text-2xl text-white font-mono'>{market.name}</p>
            <p className='text-xl'>{market.newResult}</p>
          </div>
        ))}
      </div>

      <section id='contact'>
        <div className='flex flex-col'>
          {Contents.map((content) => (
            <div
              className={`${
                content.isContent
                  ? 'm-2 space-y-2 border rounded p-2'
                  : 'hidden'
              }`}>
              <p>{content.lineA}</p>
              <p>{content.lineB}</p>
              <p>{content.line1}</p>
              <p title='VERIFIED'>{content.name}</p>
              <p title='VERIFIED'>{content.contact}</p>
            </div>
          ))}
        </div>
      </section>

      <section id='chart'>
        <div className='grid rounded grid-cols-2 border-2 border-green-800 bg-blue-500'>
          {Markets.map((market) => (
            <div
              className={`${market.isPremium ? 'bg-slate-800 ' : ''} ${
                market.isActive ? 'border-2 p-2 font-bold text-2xl' : 'hidden'
              }`}>
              <p>{market.name}</p>
              <p>{market.time}</p>
              <p>
                {market.oldResult} 🌐 {market.newResult}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id='table'>
        <div className=' border grid w-full grid-flow-col overflow-auto gap-2  '>
          <div className='text-black shrink p-2 font-bold text-center '>
            {Dates.map((date) => (
              <p
                className='bg-red-100 p-2 '
                title='DATE'>
                {date.date}
              </p>
            ))}
          </div>
          {Markets.map((market) => (
            <div className='flex flex-col'>
              <div className='w-full bg-white border-2 border-black p-2 mb-2 font-extrabold text-pink-500 rounded-lg shadow-xl'>
                {market.name}
              </div>
              <div className='bg-white w-full flex border-2 border-black justify-center items-start font-extrabold text-pink-500 rounded-lg shadow-xl'>
                <div className='text-blue-400 grow w-20  items-center justify-center text-sm m-2 p-1 '>
                  {market.newResult}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className='border-4'>
        {Contents.map((content) => (
          <div className={`${content.isActive ? 'p-2' : 'hidden'}`}>
            <p className='text-2xl font-mono  text-yellow-400 underline font-extrabold'>
              {content.contentHead}
            </p>
            <p className='m-2 text-green-400'>{content.contentPara}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
