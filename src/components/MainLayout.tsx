import React, { ReactNode } from 'react';
import Header from './Header';
type Props = {
  children: ReactNode;
};
export default function MainLayout(props: Props) {
  return (
    <>
      <Header />
      {props?.children}
    </>
  );
}
