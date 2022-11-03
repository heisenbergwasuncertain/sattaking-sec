/** @format */

import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Markets, Contents, Dates, RecordCharts } from 'ui';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className='bg-yellow-100'>
      <Head>
        <title>
          Satta king chart| Satta king live| Gali satta Deshawar live result,
          Gali live result, Satta matka, Satta matka king, Satta king up, Satta
          king 2020 chart, Satta king desawar, Satta king gali, Gali live
          result, Disawar live result, Satta Number, Satta Game, Gali Number,
          Delhi Satta king, Satta Bazar, Black satta king, Gali Single Jodi,
          Black Satta Result, Desawar Single Jodi
        </title>
        <link
          rel='icon'
          href='https://img.freepik.com/premium-vector/king-crown-esport-logo-design_177315-269.jpg?w=2000'
        />
      </Head>
      <main className='space-y-4 p-2 bg-gray-500'>
        <header className='flex sticky bg-gray-500 top-0 z-50 text-center font-bold'>
          <p className=' w-full rounded-lg border-2 border-yellow-400'>
            <Link href='#chart'> CHARTS</Link>
          </p>
          <p className=' w-full rounded-lg border-2 border-yellow-400'>
            <Link href='/'>HOME</Link>
          </p>
          <p className=' w-full rounded-lg border-2 border-yellow-400'>
            <Link href='#table'> TABLE</Link>
          </p>
        </header>
        <div className=' bg-black p-2 relative  rounded-lg border-2 border-yellow-500'>
          <p className='flex text-center justify-center text-md text-red-700 font-bold'>
            SATTA MATKA KING MATKA RESULT
          </p>
          <p className='flex text-center justify-center text-blue-700 italic text-sm font-normal '>
            Satta king chart, Satta king, live Gali satta, Deshawar live result,
            Gali live result, Satta matka, Satta matka king, Satta king up,
            Satta king 2020 chart, Satta king desawar, Satta king gali, Gali
            live result, Disawar live result, Satta Number, Satta Game, Gali
            Number, Delhi Satta king, Satta Bazar, Black satta king, Gali Single
            Jodi, Black Satta Result, Desawar Single Jodi
          </p>
        </div>

        <div className='p-2 bg-white font-mono w-full text-center rounded-lg border-2 border-yellow-400'>
          {Markets.map((market) => (
            <div className={`${market.isPremium ? '' : 'hidden'}`}>
              <p className='  text-2xl text-yellow-500 font-bold'>
                {market.name}
              </p>
              <p className='text-black font-bold '>00</p>
            </div>
          ))}
        </div>

        <div className='border-2 rounded-lg p-2 text-center bg-white items-center justify-center space-y-4'>
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

          <div className='text-black flex items-center justify-center'>
            <button className='cover flex items-center  bg-white p-1 text-center font-bold rounded-full'>
              📞 WHATSAPP
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
          <div className='border-2 rounded-lg text-center font-bold space-y-2 border-yellow-500 w-full'>
            <h1 className='text-2xl border-2 rounded-lg'>LIVE RESULTS</h1>
            <div className=' grid grid-cols-3 gap-3 p-2 sm:grid-cols-3 lg:grid-cols-8 '>
              {Markets.map((market) => (
                <div
                  className={`${
                    market.isActive
                      ? 'bg-white border rounded-lg border-yellow-500'
                      : 'hidden'
                  } ${market.isPremium ? 'bg-blue-500' : ''}`}>
                  <p className='text-green-400'>{market.name}</p>
                  <p className=''>{market.time} </p>
                  <p className='text-red-400'>
                    {market.oldResult} 🌐 {market.newResult}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id='table'>
          <div className=' p-2 rounded-lg border-2 text-center'>
            <div className='flex'>
              {Dates.map((date) => (
                <p
                  className='text-yellow-400 text-2xl font-mono font-bold underline cursor-pointer'
                  title='DATE'>
                  RECORDS {date.date}
                </p>
              ))}
            </div>
            {Markets.map((market) => (
              <div className='rounded-lg border-2'>
                <p className='font-bold text-white text-2xl'>{market.name}</p>
                <p className='font-extrabold text-xl'>{market.newResult}</p>
              </div>
            ))}
          </div>
        </section>

        <div className='space-y-2 text-center w-full rounded-lg border-2 border-yellow-400 p-2'>
          <p className='w-full justify-center rounded-lg border-2 bg-white text-2xl font-bold text-black '>
            RECORD CHART
          </p>

          <div className=' w-full  bg-white cursor-pointer text-xl font-bold italic text-blue-700'>
            {RecordCharts.map((recordchart) => (
              <p className={`${recordchart.isActive ? '' : 'hidden'}`}>
                <a href='#'>{recordchart.chart} </a>
              </p>
            ))}
          </div>
        </div>
        <div className='space-y-2 p-2 flex bg-black flex-col text-center justify-center border-4 border-red-700 rounded-[10px]'>
          {Contents.map((content) => (
            <div className={`${content.isActive ? '' : 'hidden'}`}>
              <h1 className='text-white underline font-bold text-2xl font-serif'>
                {content.contentHead}
              </h1>
              <p className='text-yellow-500 italic'>{content.contentPara}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
