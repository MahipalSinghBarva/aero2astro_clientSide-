"use client";

import Head from 'next/head';
import React, { useEffect, useRef } from 'react';

const PlasioViewer = ({ lasFileUrl }) => {
  const viewerRef = useRef();

  useEffect(() => {
    if (window.plas) {
      const viewer = new plas.io.Viewer(viewerRef.current);
      viewer.load(lasFileUrl);
      return () => viewer.destroy();
    }
  }, [lasFileUrl]);

  return (
    <>
      <Head>
        <script src="https://cdn.plasio.io/plasio.js" async/>
      </Head>
      <div ref={viewerRef} style={{ width: '100%', height: '600px' }}></div>
    </>
  );
};

export default PlasioViewer;
