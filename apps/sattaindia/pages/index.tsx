/** @format */

import { Button, Contents, Markets, Dates, RecordCharts } from 'ui';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

export default function Web() {
  return (
    <main className='theme-neon bordero space-y-2 p-1 w-full bg-skin-fill'>
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
      <header className='sticky top-0'>
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

      <div className='bg-black text-white flex flex-col bordero space-y-2 items-center justify-center'>
        <p className='bg-yellow-400 rounded-full text-4xl w-full'>SATTA KING</p>
        <p className='text-2xl'>आज की लीक जोडी</p>
        <button className='text-black flex items-center border-2 bg-white p-2 text-center font-bold border-blue-800 rounded-full'>
          <Image
            src='/whatsapp.svg'
            height={30}
            width={30}
          />
          WHATSAPP CHAT
        </button>
      </div>

      <div className=' bordero bg-white rounded-lg flex space-x-1 overflow-x-auto'>
        {Markets.map((market) => (
          <div
            className={`${
              market.isPremium ? 'w-full bg-blue-600 p-1' : 'hidden'
            } ${market.isActive ? '' : 'hidden'}`}>
            <div className='  w-full items-center justify-center  font-extrabold   '>
              <p className='text-pink-500'>{market.name}</p>
              <p className='text-green-500'>{market.newResult}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='space-y-1 text-sm'>
        <p className='text-xl'>SATTA KING RECORD CHART</p>
        <div className='bordero flex flex-col items-center justify-center p-2  bg-black'>
          <p className='text-white font-extrabold text-2xl'>आज की लीक जोडी</p>
          <div className='flex items-center'>
            <button className='flex text-black border-2 bg-white p-2 text-center font-bold border-blue-800 rounded-full'>
              📞 CALL NOW
            </button>
            <button className='text-black flex items-center border-2 bg-white p-2 text-center font-bold border-blue-800 rounded-full'>
              <Image
                src='/whatsapp.svg'
                height={20}
                width={20}
              />
              WHATSAPP CHAT
            </button>
            <button className='flex text-black border-2 bg-white p-2 text-center font-bold border-blue-800 rounded-full'>
              📞 TELEGRAM
            </button>
          </div>
        </div>
        {Contents.map((content) => (
          <div
            className={`${content.isContent ? 'bordero contact' : 'hidden'}`}>
            <p>{content.lineA}</p>
            <p>{content.lineB}</p>
            <p>{content.lineC}</p>
            <p className='text-lg text-blue-800'>{content.line1}</p>
            <p className='text-red-700 text-xl'>{content.name}</p>
            <p className='text-green-800 text-xl'>{content.contact}</p>
          </div>
        ))}
      </div>

      <section id='chart'>
        <div className='bordero '>
          LIVE RESULTS
          <div className='grid grid-cols-2'>
            {Markets.map((market) => (
              <div
                className={`${market.isPremium ? 'bg-blue-400' : ''} ${
                  market.isActive ? 'border' : 'hidden'
                }`}>
                <p className=' text-2xl text-pink-900'>{market.name}</p>
                <p className=' text-1xl'>{market.time}</p>
                <div className='flex justify-center items-center'>
                  <p className='text-1xl'>
                    {' '}
                    {market.oldResult} ➡️ {market.newResult}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id='table'>
        <div className='overflow-x-auto bordero grid w-full grid-flow-col gap-2  '>
          {Markets.map((market) => (
            <div className='flex flex-col'>
              <div className='whitespace-nowrap bg-white border-2 border-black p-2 mb-2 font-extrabold text-pink-500 rounded-lg shadow-xl'>
                {market.name}
              </div>
              <div className='bg-white w-full flex border-2 border-black justify-center items-start font-extrabold text-pink-500 rounded-lg shadow-xl'>
                <div className='text-black shrink w-0 my-1 mx-2 flex items-start justify-start text-sm  '>
                  {Dates.map((date) => (
                    <p
                      className='bg-red-100 px-2 border rounded-full'
                      title='DATE'>
                      {date.date}
                    </p>
                  ))}
                </div>
                <div className='text-blue-400 grow w-20 text-5xl  items-center justify-center m-2 p-2 '>
                  {market.newResult}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className='bordero border-4 bg-black'>
        <div className='bordero bg-blue-700 text-4xl mb-3 text-white font-serif '>
          2022 SATTA RECORD CHART
        </div>
        {RecordCharts.map((recordchart) => (
          <div
            className={`${
              recordchart.isActive
                ? 'bordero bg-white rounded-full text-xl'
                : 'hidden'
            }`}>
            <p>
              <a href='#'>{recordchart.chart}</a>
            </p>
          </div>
        ))}
      </div>

      <div className='bordero'>
        {Contents.map((content) => (
          <div className={`${content.isActive ? '' : 'hidden'}`}>
            <p className='p-2 text-red-800 font-extrabold underline decoration-4'>
              🔛{content.contentHead}🔛
            </p>
            <p className='italic'>{content.contentPara}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
