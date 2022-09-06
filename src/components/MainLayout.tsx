import React, { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

type Props = {
  children: ReactNode;
};
export default function MainLayout(props: Props) {
  return (
    <>
      <Header />
      {props?.children}
      <Footer />
    </>
  );
}
