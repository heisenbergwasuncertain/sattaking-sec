/** @format */

import { Button, Markets, Contents, Dates } from 'ui';
import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

export default function Web() {
  return (
    <main className='theme-site space-y-2 p-2'>
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
      <header className='sticky top-0 z-50'>
        <div className=' flex items-center justify-center '>
          <p className='bordero  rounded bg-orange-500'>
            <Link href='/'>♛HOME♛</Link>
          </p>
          <p className='bordero rounded bg-orange-500'>
            <Link href='#chart'>CHART</Link>
          </p>
          <p className='bordero rounded bg-orange-500'>
            <Link href='#table'>TABLE</Link>
          </p>
        </div>
      </header>

      <p className='bordero'>
        Satta king chart| Satta king live| Gali satta Deshawar live result, Gali
        live result, Satta matka, Satta matka king, Satta king up, Satta king
        2020 chart, Satta king desawar, Satta king gali, Gali live result,
        Disawar live result, Satta Number, Satta Game, Gali Number, Delhi Satta
        king, Satta Bazar, Black satta king, Gali Single Jodi, Black Satta
        Result, Desawar Single Jodi
      </p>

      <div className='bordero text-4xl bg-black text-white charts flex-col'>
        {Markets.map((market) => (
          <div
            className={`${market.isPremium ? '' : 'hidden'} ${
              market.isActive ? '' : 'hidden'
            }`}>
            <p>{market.name}</p>
            <p className='text-2xl text-yellow-400'>{market.newResult}</p>
          </div>
        ))}
      </div>

      <div className='bordero space-y-4'>
        {Contents.map((content) => (
          <div>
            <p>{content.lineA}</p>
            <p>{content.line1}</p>
            <p
              className='text-blue-500'
              title='VERIFIED'>
              {content.name}
            </p>
            <p title='VERIFIED'>{content.contact}</p>
          </div>
        ))}

        <div className='text-black flex'>
          <button className='bordero '>
            <Image
              src='/whatsapp.svg'
              alt='whatsapp image'
              height={30}
              width={30}
            />
            WHATSAPP
          </button>
          <button className='bordero '>📞 CALL NOW</button>
          <button className='bordero '>📞 TELEGRAM</button>
        </div>
      </div>

      <section id='chart'>
        <div className='bordero '>
          <p className='text-2xl'>LIVE RESULTS</p>
          <div className=' flex font-extrabold  rounded-lg items-center justify-center'>
            <p className='bordero border-2 bg-blue-700 '>MARKETS ⬇️</p>
            <p className='bordero border-2 bg-blue-700 '>NEW RESULT ⬇️</p>
            <p className='bordero border-2 bg-blue-700 '>OLD RESULT ⬇️</p>
          </div>
          {Markets.map((market) => (
            <div
              className={`${
                market.isPremium ? 'bg-yellow-400 rounded-lg' : ' bg-blue-500'
              } ${market.isActive ? '' : 'hidden'}`}>
              <div className='flex font-extrabold rounded-lg'>
                <div className='bordero border-2 bg-blue-500 bg-transparent '>
                  <p>{market.name}</p>
                  <p>{market.time}</p>
                </div>
                <p className='charts bordero '>{market.oldResult}</p>
                <p className='bordero charts bg-blue-500 bg-transparent '>
                  {market.newResult}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id='table'>
        <div className='bordero overflow-x-auto'>
          {Markets.map((market) => (
            <div className='flex'>
              <div className='w-full whitespace-nowrap bg-white border-2 border-black p-2  font-extrabold text-pink-500 rounded-lg shadow-xl'>
                {market.name}
                <div className='mb-3 bg-white w-full flex border-2 border-black justify-center items-start font-extrabold text-pink-500 rounded-lg shadow-xl'>
                  <div className='text-black shrink w-0 my-1 mx-2 flex items-start justify-start text-sm  '>
                    {Dates.map((date) => (
                      <p className='bg-red-100 px-2 border rounded-full'>
                        Record {date.date}
                      </p>
                    ))}
                  </div>
                  <div className=' text-blue-400 grow w-20 text-5xl  items-center justify-center m-2 p-1 '>
                    {market.newResult}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className='bordero border-4 charts flex-col'>
        {Contents.map((content) => (
          <>
            <p className='text-2xl underline tracking-wide'>
              {content.contentHead}
            </p>
            <p className='italic leading-relaxed text-justify'>
              {content.contentPara}
            </p>
          </>
        ))}
      </div>
    </main>
  );
}
