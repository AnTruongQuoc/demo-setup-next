import Attraction from 'components/Attraction';
import HomeBanner from 'components/HomeBanner';
import LiveAuctions from 'components/LiveAuctions';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import MainLayout from '../components/MainLayout';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <div>
        <Head>
          <title>RYGLabs POC</title>
          <meta name='description' content='Generated by RYGLabs' />
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <main className='flex flex-1 flex-col justify-start items-center h-min mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
          <HomeBanner />
          <Attraction />
          <LiveAuctions/>
        </main>

        <footer className='flex flex-row justify-center items-center'>
          <a href='https://www.itsryg.com/' target='_blank' rel='noopener noreferrer'>
            Powered by RYG.Labs
          </a>
        </footer>
      </div>
    </MainLayout>
  );
};

export default Home;
