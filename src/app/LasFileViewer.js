"use client";
import React, { useState } from 'react';
import UploadeFile from './UploadeFile';
import PlasioViewer from './PlasioViewer';

export default function Home() {
  const [lasFileUrl, setLasFileUrl] = useState(null);

  const handleFileUploaded = (fileUrl) => {
    setLasFileUrl(fileUrl);
  };

  return (
    <div className="container mx-auto p-8 ">
      <h1 className="text-3xl font-bold mb-8 text-gray-400 flex justify-center">LAS File Viewer</h1>
      <UploadeFile onFileUploaded={handleFileUploaded} />
      {lasFileUrl && (
        <div className="mt-8">
          <PlasioViewer lasFileUrl={lasFileUrl} />
        </div>
      )}
    </div>
  );
}
