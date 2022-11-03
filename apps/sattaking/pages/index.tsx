/** @format */

import { Button } from 'ui';
import Image from 'next/image';
import { Markets, Contents, Dates } from 'ui';
import Head from 'next/head';
import Link from 'next/link';

export default function Web() {
  return (
    <main className='theme-A cover space-y-4 items-center justify-center'>
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
      <header className='flex sticky top-0 z-20 bg-black'>
        <p className='cover'>
          <Link href='/'>HOME</Link>
        </p>
        <p className='cover'>
          <Link href='#chart'>CHART</Link>
        </p>
        <p className='cover'>
          <Link href='#table'>TABLE</Link>
        </p>
      </header>
      <p className='bg-white text-black cover font-extrabold'>
        KING ONLINE - SATTA-KING 2022 - SATTA KING - SATTA KING 2017 - SATTA
        KING 2018 - SATTA KING 2019 - SATTA KING 2020 - SATTA KING UP - SATTA
        KING - SATTA GAME - SATTA GALI - SATTA NUMBER - GALI SATTA - LIVE SATTA
        - SATTA KING FAST - SATTAKING - SATTA COM - SATTA RESULT SATTA BAZAR -
        SATTA RESULT - DISAWAR RESULT - DESHAWER RESULT - SATTA
      </p>

      <div className='bg-white text-black text-4xl cover'>
        <p className='cover text-2xl'>TODAY SATTA</p>
        {Markets.map((market) => (
          <div className={`${market.isPremium ? 'bg-yellow-200' : 'hidden'}`}>
            <p className=' text-4xl'>{market.name}</p>
            <p className=''>{market.newResult}</p>
          </div>
        ))}
      </div>

      <div className='cover items-center justify-center space-y-4'>
        {Contents.map((content) => (
          <div>
            <p className=''>{content.lineA}</p>
            <p className=''>{content.line1}</p>
            <p
              className='text-blue-500'
              title='VERIFIED'>
              {content.name}
            </p>
            <p
              className=''
              title='VERIFIED'>
              {content.contact}
            </p>
          </div>
        ))}

        <div className='text-black flex'>
          <button className='cover flex items-center  bg-white p-1 text-center font-bold rounded-full'>
            <Image
              src='/whatsapp.svg'
              alt='whatsapp image'
              height={30}
              width={30}
            />
            WHATSAPP
          </button>
          <button className='cover flex items-center  bg-white p-1 text-center font-bold rounded-full'>
            📞 CALL NOW
          </button>
          <button className='cover flex items-center  bg-white p-1 text-center font-bold rounded-full'>
            📞 TELEGRAM
          </button>
        </div>
      </div>

      <section id='chart'>
        <div className='cover space-y-4 w-full'>
          <h1 className='text-2xl'>LIVE RESULTS</h1>
          <div className='grid grid-cols-2'>
            {Markets.map((market) => (
              <div
                className={`${market.isActive ? 'cover' : 'hidden'} ${
                  market.isPremium ? 'bg-blue-500' : ''
                }`}>
                <p>{market.name}</p>
                <p>{market.time} </p>
                <p>
                  {market.oldResult} 🌐 {market.newResult}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id='table'>
        <div className='cover'>
          {Dates.map((date) => (
            <p className='text-2xl text-blue-600 font-mono'>
              RECORDS {date.date}
            </p>
          ))}
          {Markets.map((market) => (
            <div className='cover'>
              <p>{market.name}</p>
              <p>{market.newResult}</p>
            </div>
          ))}
        </div>
      </section>

      <div className=' rounded-lg space-y-2 p-2 '>
        {Contents.map((content) => (
          <div
            className={`${content.isActive ? 'border-2 p-2 m-2' : 'hidden'}`}>
            <p className='text-2xl font-mono  text-yellow-400 underline font-extrabold'>
              {content.contentHead}
            </p>
            <p className=' text-green-400'>{content.contentPara}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
