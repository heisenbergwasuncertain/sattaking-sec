/** @format */

import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Markets, Contents, Dates, RecordCharts } from 'ui';

const Home: NextPage = () => {
  return (
    <main className=' space-y-4 border-4 border-rose-600 p-2'>
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
          href='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH_-1B2ORZzykp9bVAfInQrcsAJ4R9zC_Zug&usqp=CAU'
        />
      </Head>
      <header className='sticky top-0 z-50 p-2 flex bg-white font-bold text-center'>
        <p className=' w-full  '>
          <Link href='#chart'> CHARTS</Link>
        </p>
        <p className=' w-full  '>
          <Link href='/'>HOME</Link>
        </p>
        <p className=' w-full  '>
          <Link href='#table'>SATTA TABLE</Link>
        </p>
      </header>

      <div className='text-center w-full bg-black rounded-lg border-2 p-2 border-red-700'>
        <p className='  justify-center text-md text-red-700 font-bold'>
          SATTA MATKA KING MATKA RESULT
        </p>
        <p className='  justify-center text-blue-700 italic text-sm font-normal '>
          Satta king chart, Satta king, live Gali satta, Deshawar live result,
          Gali live result, Satta matka, Satta matka king, Satta king up, Satta
          king 2020 chart, Satta king desawar, Satta king gali, Gali live
          result, Disawar live result, Satta Number, Satta Game, Gali Number,
          Delhi Satta king, Satta Bazar, Black satta king, Gali Single Jodi,
          Black Satta Result, Desawar Single Jodi
        </p>
      </div>

      <div className='flex flex-col  bg-black p-2 text-center rounded-lg border-2 border-red-700 font-mono'>
        {Markets.map((market) => (
          <div className={`${market.isPremium ? '' : 'hidden'}`}>
            <p className=' text-3xl text-red-700 font-bold'>{market.name}</p>
            <p className='text-white font-bold '>{market.newResult}</p>
          </div>
        ))}
      </div>

      <div className='p-2 items-center bg-black rounded-lg border-2 border-red-700 space-y-4'>
        {Contents.map((content) => (
          <div className={`${content.isContent ? '' : 'hidden'}`}>
            <p className='text-white text-center'>{content.lineA}</p>
            <p className='text-white text-center'>{content.line1}</p>

            <p className='text-red-500 text-center'>{content.line2}</p>
            <p className='text-white text-center'>{content.lineB}</p>
            <p
              className='text-yellow-500 font-bold text-center'
              title='VERIFIED'>
              {content.name}
            </p>
            <p
              className='text-center  text-blue-800 text-xl font-bold underline'
              title='VERIFIED'>
              {content.contact}
            </p>
          </div>
        ))}
      </div>

      <section id='chart'>
        <div className='space-y-2'>
          <div className=' w-full rounded-lg'>
            <div className=' w-full text-center justify-center border-2 p-2 bg-black border-red-700 rounded-lg '>
              <p className='text-red-700 text-center font-bold text-2xl italic'>
                LIVE RESULTS
              </p>
            </div>
          </div>
          <div className=' grid grid-cols-3 gap-3 p-2 sm:grid-cols-3 lg:grid-cols-8 '>
            {Markets.map((market) => (
              <div
                className={`${
                  market.isPremium ? 'bg-yellow-500 w-full rounded ' : ''
                }${market.isActive ? '' : 'hidden'}`}>
                <div className=' p-2 text-center flex flex-col  border-2  rounded-lg items-center justify-center'>
                  <p className='text-blue-700 font-bold'>{market.name}</p>
                  <p
                    className='text-red-500'
                    title='VERIFIED'>
                    {market.oldResult} ⇒ {market.newResult}
                  </p>
                  <p className='text-sm font-medium text-black'>
                    {market.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id='table'>
        <div className='  rounded-lg border-2 border-yellow-700'>
          {Dates.map((date) => (
            <p className='text-center p-2 font-mono text-xl text-blue-700 font-bold'>
              RECORDS {date.date}
            </p>
          ))}
          {Markets.map((market) => (
            <div className='flex font-bold text-center'>
              <p className='text-blue-600 w-full border border-slate-300 '>
                {market.name}
              </p>

              <p className='... w-full border font-serif '>
                {market.newResult}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className=' flex text-center flex-col w-full font-serif bg-black p-2  rounded-lg border-2 border-red-700'>
        <p className=' border rounded-lg w-full  text-xl text-white font-bold'>
          RECORD CHART
        </p>
        {RecordCharts.map((recordchart) => (
          <div className={`${recordchart.isActive ? '' : 'hidden'}`}>
            <p className=' text-red-700 font-bold'>
              <Link href='#'>{recordchart.chart}</Link>
            </p>
          </div>
        ))}
      </div>

      <div className=' flex  p-2 flex-col items-center justify-center rounded-lg border-2 border-yellow-700 shadow-lg shadow-gray-500'>
        {Contents.map((content) => (
          <div className={`${content.isActive ? '' : 'hidden'}`}>
            <div className='flex flex-col w-full  item-center justify-center items-start relative rounded-lg bg-yellow-900 shadow-lg shadow-gray-500 '>
              <p className='w-full justify-center rounded-lg border-2 border-white bg-yellow-700 p-2 text-center text-2xl font-bold text-white shadow-lg shadow-gray-500 '>
                {content.contentHead}
              </p>
            </div>
            <p className='text-center justify-center text-sm p-2 text-black font-bold '>
              {content.contentPara}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
