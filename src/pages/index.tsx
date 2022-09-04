import Attraction from 'components/Attraction';
import CreateNFT from 'components/CreateNFT';
import HomeBanner from 'components/HomeBanner';
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
        </main>

        <footer>
          <div>
            <CreateNFT />
          </div>

        </footer>
      </div>
    </MainLayout>
  );
};

export default Home;
