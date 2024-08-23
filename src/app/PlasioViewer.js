"use client";

import React, { useEffect, useRef } from 'react';
import Head from 'next/head';

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
        <script src="https://cdn.plasio.io/plasio.js" />
      </Head>
      <div
        ref={viewerRef}
        className="w-full h-[600px] border border-gray-300 rounded-md"
      ></div>
    </>
  );
};

export default PlasioViewer;
