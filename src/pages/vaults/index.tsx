import MainLayout from 'components/MainLayout';
import Head from 'next/head';
import React from 'react';
const VaultDetail = () => {
  return (
    <>
      <MainLayout>
        <Head>
          <title>RYGLabs POC | Vault Detail</title>
          <meta name='description' content='Generated by RYGLabs' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <div style={{ height: '100vh' }}>About Page</div>
      </MainLayout>
    </>
  );
};

export default VaultDetail;