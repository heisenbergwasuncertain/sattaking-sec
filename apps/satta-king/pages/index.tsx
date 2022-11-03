/** @format */

import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Markets, Contents, Dates, RecordCharts } from 'ui';

const Home: NextPage = () => {
  return (
    <div>
      <main className='p-2 w-full flex flex-col space-y-4 border-4 border-red-700 bg-yellow-500'>
        <Head>
          <title>
            Satta king chart| Satta king live| Gali satta Deshawar live result,
            Gali live result, Satta matka, Satta matka king, Satta king up,
            Satta king 2020 chart, Satta king desawar, Satta king gali, Gali
            live result, Disawar live result, Satta Number, Satta Game, Gali
            Number, Delhi Satta king, Satta Bazar, Black satta king, Gali Single
            Jodi, Black Satta Result, Desawar Single Jodi
          </title>
          <link
            rel='icon'
            href='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8jN-71rIX2VcPzLG-_8TJoBfoB-5U0I7Ln9_znff5mTPpN9AkuV4JEg7n5tX5qYmRXIQ&usqp=CAU'
          />
        </Head>
        <header className='sticky top-0 z-50 '>
          <div className='text-white font-bold flex items-center justify-center '>
            <p className='bg-black w-full text-center justify-center rounded-[10px] border-4 border-red-700'>
              <Link href='/'>HOME</Link>
            </p>
            <p className='bg-black w-full text-center justify-center rounded-[10px] border-4 border-red-700'>
              <Link href='#chart'> CHARTS</Link>
            </p>
            <p className='bg-black w-full text-center justify-center rounded-[10px] border-4 border-red-700'>
              <Link href='#table'>TABLE</Link>
            </p>
          </div>
        </header>

        {Contents.map((content) => (
          <div className={`${content.isKey ? '' : 'hidden'}`}>
            <h1 className='flex text-center justify-center text-blue-800 text-xl font-bold underline'>
              {content.contentkeyword}
            </h1>
          </div>
        ))}
        <div className='flex flex-col items-center bg-black rounded-lg border-2 border-red-700'>
          {Markets.map((market) => (
            <div className={`${market.isPremium ? 'p-2' : 'hidden'}`}>
              <p className='flex text-center justify-center font-serif text-2xl text-red-700 font-bold'>
                {market.name}
              </p>
              <p className='text-white font-bold flex flex-col items-center justify-center rounded-lg border-2 bg-yellow-500'>
                {market.newResult}
              </p>
            </div>
          ))}
        </div>

        <div className='p-2 flex flex-col w-full justify-between items-center bg-black rounded-lg border-2 border-red-700'>
          {Contents.map((content) => (
            <div className={`${content.isContent ? 'p-2' : 'hiden'}`}>
              <p className='text-white text-center'>
                {content.lineA}
                {content.lineB}
              </p>
              <p className='text-red-500 text-center'>{content.line1}</p>
              <p className='text-yellow-500 font-bold text-center'>
                {content.line2}
              </p>
              <p className='text-yellow-500 font-bold text-center'>
                {content.line3}
              </p>
              <div className='grid grid-cols-2'>
                <p
                  className='flex text-center justify-center text-blue-800 text-xl font-bold underline'
                  title='VERIFIED'>
                  {content.name}
                </p>
                <p
                  className='flex text-center justify-center text-blue-800 text-xl font-bold underline'
                  title='VERIFIED'>
                  {content.contact}
                </p>
              </div>
            </div>
          ))}
        </div>

        <section id='chart'>
          <div className='flex flex-col w-full mb-3 item-center justify-center items-start relative rounded-[10px] bg-yellow-900 shadow-lg shadow-gray-500 '>
            <div className='flex w-full items-center justify-center mb-3 border-2 p-2 bg-yellow-700 border-white rounded-xl '>
              <p className='text-white text-center font-bold text-2xl italic'>
                WORLD ME SABSE FAST SATTA MATKA RESULT
              </p>
            </div>
          </div>
          <div className=' grid grid-cols-3 gap-3 p-2 sm:grid-cols-3 lg:grid-cols-8 '>
            {Markets.map((market) => (
              <div className=' text-center w-full flex-col bg-yellow-100 border-4 border-yellow-700 rounded-lg items-center justify-center'>
                <div
                  className={`${
                    market.isPremium ? 'bg-blue-500 p-2 rounded' : ''
                  }${market.isActive ? '' : 'hidden'}`}>
                  <p className=' font-extrabold'>{market.name}</p>
                  <p className='luckcode'>
                    {market.oldResult} ⇒ {market.newResult}
                  </p>
                  <p className='text-sm font-medium text-black'>
                    {market.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id='table'>
          <div className='items-center justify-start  rounded-lg border-4 border-yellow-700'>
            {Dates.map((date) => (
              <p className='w-full text-center text-2xl font-bold font-mono'>
                RECORDS {date.date}
              </p>
            ))}
            {Markets.map((market) => (
              <div className='p-2 border flex w-full text-center bg-white font-bold'>
                <p className='w-full text-center'>{market.name}</p>
                <p className='w-full text-center'>{market.newResult}</p>
              </div>
            ))}
          </div>
        </section>

        <div className=' w-full  rounded-lg border-2 border-red-700 bg-black '>
          <p className='w-full justify-center rounded-lg border-2 border-white  p-2 text-center text-2xl font-bold text-white'>
            SK KING CHART
          </p>

          <div className='p-2 flex w-full flex-col items-center justify-center border-2  border-red-700  '>
            {RecordCharts.map((recordchart) => (
              <p className=' text-xl font-bold italic text-blue-700'>
                <a href='#'> {recordchart.chart} </a>
              </p>
            ))}
          </div>
        </div>

        <div className='p-2 space-y-2 flex bg-black flex-col text-center justify-center border-4 border-red-700 rounded-[10px]'>
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
