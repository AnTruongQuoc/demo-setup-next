import HomeBanner from 'components/HomeBanner';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../assets/styles/Home.module.css';
import MainLayout from '../components/MainLayout';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <div className={styles.container}>
        <Head>
          <title>RYGLabs POC</title>
          <meta name='description' content='Generated by RYGLabs' />
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <main className='flex flex-1 flex-col justify-start items-center h-min'>
          <HomeBanner />
        </main>

        <footer className={styles.footer}>
          <a
            href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'>
            Powered by{' '}
            <span className={styles.logo}>
              <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
            </span>
          </a>
        </footer>
      </div>
    </MainLayout>
  );
};

export default Home;
