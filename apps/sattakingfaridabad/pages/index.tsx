/** @format */

import { Button } from 'ui';
import { Markets, Contents, Dates, RecordCharts } from 'ui';
import { Head } from 'next/document';
import Link from 'next/link';

export default function Web() {
  return (
    <main className='bg-gray-400 text-center p-2 space-y-4 font-bold'>
      <div className='sticky top-0 z-20'>
        <div className='flex w-full font-extrabold bg-gray-500'>
          <p className='border-2 w-full rounded'>
            <Link href='/'>HOME</Link>
          </p>
          <p className='border-2 w-full rounded'>
            <Link href='#chart'>CHART</Link>
          </p>
          <p className='border-2 w-full rounded'>
            <Link href='#table'>TABLE</Link>
          </p>
        </div>
      </div>

      <div className='space-y-4'>
        {Contents.map((content) => (
          <div className={content.isKey ? 'border p-2 italic' : 'hidden'}>
            <p className=''>{content.contentkey}</p>
            <p className=''>{content.contentkeyword}</p>
          </div>
        ))}
        <div className='border-2 rounded space-y-4 p-2'>
          <p className='underline bg-white'>TODAY's RESULT</p>
          {Markets.map((market) => (
            <div className={`${market.isPremium ? '' : 'hidden'}`}>
              <p className='text-xl text-blue-500 border w-full'>
                {market.name}
              </p>
              <p className=''>{market.newResult}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-col'>
        {Contents.map((content) => (
          <div
            className={`${
              content.isContent ? 'border-2 rounded p-2' : 'hidden'
            }`}>
            <p className=''>{content.lineA}</p>
            <p className=''>{content.lineB}</p>
            <p className=''>{content.line1}</p>
            <p className=''>{content.line2}</p>
            <p className=''>{content.lineC}</p>
            <p title='VERIFIED'>{content.name}</p>
            <p title='VERIFIED'>{content.contact}</p>
          </div>
        ))}
      </div>

      <section id='chart'>
        <div>
          <div className='flex flex-col w-full mb-3 item-center justify-center items-start relative rounded-[10px] bg-yellow-900 shadow-lg shadow-gray-500 '>
            <div className='flex w-full items-center justify-center mb-3 border-2 p-2 bg-yellow-700 border-white rounded-xl '>
              <h1 className='text-white text-center font-bold text-2xl italic'>
                WORLD ME SABSE FAST SATTA MATKA RESULT
              </h1>
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
        </div>
      </section>

      <section id='table'>
        <div className='space-y-2 border'>
          <td className='... border   '>MARKET/ DATE</td>
          {Dates.map((date) => (
            <>
              <td className='w-full border text-center  '>{date.date}</td>
            </>
          ))}
          {Markets.map((market) => (
            <div className='  '>
              <table className='flex  '>
                <p className='... rounded-lg border-4 border-yellow-700 w-full '>
                  {market.name}
                </p>

                <p className='... rounded-lg border-4 border-yellow-700 w-full '>
                  {market.newResult}
                </p>
              </table>
            </div>
          ))}
        </div>
      </section>

      <div className='space-y-4'>
        <div className='border-2 rounded p-2'>
          <p className='text-2xl font-bold font-mono underline bg-blue-500 w-full'>
            RECORD CHART
          </p>
          {RecordCharts.map((recordchart) => (
            <div className={`${recordchart.isActive ? '' : 'hidden'}`}>
              <p className='border-2 p-2'>
                <a href='#'>{recordchart.chart}</a>
              </p>
            </div>
          ))}
        </div>
        <div className='border-2 rounded p-2 '>
          {Contents.map((content) => (
            <>
              <p className='text-xl underline font-mono'>
                {content.contentHead}
              </p>
              <p className='italic'>{content.contentPara}</p>
            </>
          ))}
        </div>
      </div>
    </main>
  );
}
