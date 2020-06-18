import React from 'react';
import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

const RecoilRoot = dynamic(
  () => import('recoil').then((module) => module.RecoilRoot),
  { ssr: false }
);

export default (props: AppProps) => {
  const { Component, pageProps } = props;
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
};
