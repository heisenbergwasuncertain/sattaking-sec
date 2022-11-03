/** @format */

import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Charts from '../components/Charts';
import { Markets, Contents, Dates, RecordCharts } from 'ui';
import Table from '../components/Table';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Link from 'next/link';
import Header from '../components/Header';
import Contacts from '../components/Contacts';
import RecordChart from '../components/RecordChart';

const Home: NextPage = () => {
  return (
    <div>
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
          href='https://img.freepik.com/free-vector/king-head-vector-logo-icon_43623-454.jpg'
        />
      </Head>

      <main className='p-2 w-full space-y-4 shadow-md shadow-gray-500 rounded-lg items-center justify-center text-center'>
        <header className='flex items-center justify-center bg-gray-200 sticky top-0 z-20'>
          <div className=' cursor-pointer '>
            <img
              src='/logo.webp'
              alt='logo'
              height={50}
              width={50}
            />
          </div>
          <div className='w-full text-center flex text-yellow-700 text-2xl font-bold font-mono underline'>
            <p className=' w-full'>
              <Link href='/'>HOME</Link>
            </p>
            <p className=' w-full'>
              <Link href='#chart'>CHART</Link>
            </p>
            <p className=' w-full'>
              <Link href='#table'>TABLE</Link>
            </p>
          </div>
        </header>

        <div className='space-y-2 rounded-lg p-2 '>
          {Contents.map((content) => (
            <p className='italic'>{content.contentkeyword}</p>
          ))}
          <p className='font-bold'>💫LIVE RESULT TRENDING💫</p>
          <div className='grid grid-cols-2 border-2 p-2 rounded-lg border-black'>
            {Markets.map((market) => (
              <div
                className={`${
                  market.isPremium
                    ? 'border bg-yellow-600 p-2 rounded-lg'
                    : 'hidden'
                }`}>
                <p className='text-blue-700 font-extrabold text-xl'>
                  {market.name}
                </p>
                <p className='font-mono '>{market.newResult}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='space-y-2 text-xl font-bold rounded-lg bg-yellow-500 shadow-lg shadow-gray-500 '>
          {Contents.map((content) => (
            <div
              className={`${
                content.isContent
                  ? 'p-2 rounded-lg border-2 border-yellow-700'
                  : 'hidden'
              }`}>
              <p className=' italic'>{content.lineA}</p>
              <p className=' italic'>{content.lineB}</p>
              <p className=' italic'>{content.lineC}</p>
              <p className=' italic'>{content.line1}</p>
              <p className=' italic'>{content.line2}</p>
              <div className='grid grid-cols-2 text-blue-700 font-extrabold'>
                <p
                  className=' '
                  title='VERIFIED'>
                  {content.name}
                </p>
                <p
                  className=' '
                  title='VERIFIED'>
                  {content.contact}
                </p>
              </div>
            </div>
          ))}
        </div>

        <section id='chart'>
          <div className=' rounded-lg bg-yellow-900 shadow-lg shadow-gray-500 '>
            <p className='text-white text-center font-bold text-2xl italic'>
              FAST SATTA MATKA RESULT
            </p>
          </div>
          <div className=' grid grid-cols-3 gap-1 p-2 sm:grid-cols-5 lg:grid-cols-8 '>
            {Markets.map((market) => (
              <div className=' bg-yellow-100 border-4 border-yellow-700 rounded-lg'>
                <div
                  className={`${market.isPremium ? 'bg-blue-500 p-2' : ''}${
                    market.isActive ? '' : 'hidden'
                  }`}>
                  <p className=' font-bold italic text-black text-xl'>
                    {market.name}
                  </p>
                  <p>{market.time}</p>
                  <p className='text-yellow-700 font-bold'>
                    {market.oldResult} ⇒ {market.newResult}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id='table'
          className='rounded-lg border-4 border-yellow-800'>
          {Dates.map((date) => (
            <p className='font-bold italic text-2xl text-blue-700'>
              RECORDS {date.date}
            </p>
          ))}
          {Markets.map((market) => (
            <div className='hover:bg-yellow-500 text-xl grid grid-cols-2 w-full rounded-lg border-2 border-yellow-700'>
              <p className='... border  '>{market.name}</p>
              <p className='... border  '>{market.newResult}</p>
            </div>
          ))}
        </section>

        <div className='space-y-2 rounded-lg border-2 border-yellow-700 '>
          <p className='w-full rounded-lg border-2 border-white bg-yellow-700 p-2 text-2xl font-bold text-white shadow-lg shadow-gray-500 '>
            SK KING CHART
          </p>
          {RecordCharts.map((RecordChart) => (
            <div className='hover:bg-yellow-500 border-yellow-700  '>
              <div className={`${RecordChart.isActive ? '' : 'hidden'}`}>
                <p className=' text-xl font-bold italic text-blue-700'>
                  <a href='#'>{RecordChart.chart} </a>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className='rounded-lg border-4 border-yellow-700'>
          {Contents.map((content) => (
            <div className={`${content.isActive ? '' : 'hidden'}`}>
              <p className='rounded-lg border-2 border-white bg-yellow-700 p-2 text-2xl font-bold text-white shadow-lg shadow-gray-500 '>
                {content.contentHead}
              </p>
              <p className=' text-lg p-2'>{content.contentPara}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
