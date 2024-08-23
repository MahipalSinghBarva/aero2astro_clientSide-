"use client";

import React, { useState } from 'react';
import axios from 'axios';

const UploadFile = () => {
  const [file, setFile] = useState(null);
  const [lasFileUrl, setLasFileUrl] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setErrorMessage(null);

  const handleFileUpload = async () => {
    if (!file) {
      setErrorMessage('Please select a file to upload.');
      return;
    }

    setLoading(true);
    setErrorMessage(null);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const res = await axios.post('https://aero2astro-serverside1.onrender.com/api/upload', formData);
      setLasFileUrl(`https://aero2astro-serverside1.onrender.com/api/las/${res.data.fileId}`);
    } catch (error) {
      setErrorMessage('Failed to upload the file. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleViewFile = () => {
    window.open(lasFileUrl, '_blank'); 
  };

  return (
    <div className="p-4 flex flex-col">
      <input
        type="file"
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 border py-2 px-10"
      />
      <button
        onClick={handleFileUpload}
        disabled={loading}
        className={`mt-4 ${loading ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-700'} text-white font-bold py-2 px-4 rounded`}
      >
        {loading ? 'Uploading...' : 'Upload'}
      </button>
      {errorMessage && <p className="mt-4 text-red-500">{errorMessage}</p>}
      {lasFileUrl && (
        <button
          onClick={handleViewFile}
          className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          View Uploaded File
        </button>
      )}
    </div>
  );
};

export default UploadFile;
