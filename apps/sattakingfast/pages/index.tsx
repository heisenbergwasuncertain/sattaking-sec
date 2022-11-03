/** @format */

import Head from 'next/head';
import Link from 'next/link';
import { Button } from 'ui';
import { Markets, Contents, Dates, RecordCharts } from 'ui';

export default function Web() {
  return (
    <main className='p-4 text-center bg-black text-white space-y-4 font-mono '>
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
      <div className='sticky top-0 z-20 bg-black'>
        <div className='flex'>
          <p className='border-2 w-full'>
            <Link href='/'>HOME</Link>
          </p>
          <p className='border-2 w-full'>
            <Link href='#chart'>CHART</Link>
          </p>
          <p className='border-2 w-full'>
            <Link href='#table'>TABLE</Link>
          </p>
        </div>
      </div>

      <div className='space-y-4'>
        {Contents.map((content) => (
          <div className=''>
            <p>{content.contentkey}</p>
            <p>{content.contentkeyword}</p>
          </div>
        ))}
        <div className='border rounded-lg p-2 bg-yellow-500 font-bold'>
          <p className='text-xl'>LIVE RESULT</p>
          {Markets.map((market) => (
            <div
              className={`${
                market.isPremium ? 'border rounded p-2' : 'hidden'
              }`}>
              <p className='text-blue-400 text-xl'>{market.name}</p>
              <p className=''>{market.newResult}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        {Contents.map((content) => (
          <div
            className={`${
              content.isContent
                ? 'border p-2 rounded-lg bg-yellow-500 font-bold border-red-700'
                : 'hidden'
            }`}>
            <p className=''>{content.lineA}</p>
            <p className=''>{content.line1}</p>
            <p className=''>{content.lineB}</p>
            <p className=''>{content.line2}</p>
            <p className=''>{content.line3}</p>
            <p className=''>{content.lineC}</p>
            <div className='grid grid-cols-2 border rounded border-black p-2'>
              <p
                className='font-bold text-blue-400'
                title='VERIFED'>
                {content.contact}
              </p>
              <p
                className='font-bold text-blue-400'
                title='VERIFED'>
                {content.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      <section id='chart'>
        <div className='border-2 rounded-lg p-2'>
          <p className='text-xl'>RESULTS</p>
          <div className=' grid grid-cols-2 gap-1 p-2 '>
            {Markets.map((market) => (
              <div
                className={`${market.isPremium ? 'bg-yellow-700' : ''} ${
                  market.isActive ? 'border rounded p-2' : ''
                }`}>
                <p className=''>{market.name}</p>
                <p className=''>{market.time}</p>
                <p className=''>
                  {market.oldResult} ⟹ {market.newResult}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id='table'>
        <div className='flex'>
          <table className='w-full border-2 rounded-lg'>
            <thead className='border p-2'>
              {Dates.map((date) => (
                <tr>
                  <th>{date.date}</th>
                </tr>
              ))}
            </thead>
            <tbody>
              {Markets.map((market) => (
                <tr>
                  <td className=''>{market.name}</td>

                  <td className=''>{market.newResult}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className='border rounded-lg  '>
        <p className='text-xl underline p-2'>RECORD CHARTS</p>
        {RecordCharts.map((recordchart) => (
          <p
            className={`${
              recordchart.isActive
                ? 'border p-2 rounded bg-white text-black'
                : 'hidden'
            }`}>
            <a href='#'>{recordchart.chart}</a>
          </p>
        ))}
      </div>
      <div>
        {Contents.map((content) => (
          <div
            className={`${
              content.isActive ? 'border p-2 rounded-lg space-y-4' : 'hidden'
            }`}>
            <p className='underline text-xl'>{content.contentHead}</p>
            <p className=''>{content.contentPara}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
