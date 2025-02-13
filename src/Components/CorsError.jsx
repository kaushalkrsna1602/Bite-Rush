import React from 'react';

const CorsError = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-700 to-gray-900 text-white p-4">
      <div className="bg-gray-800 p-8 shadow-lg rounded-lg text-center">
        <h1 className="text-6xl font-extrabold mb-4 text-red-500">CORS Error</h1>
        <p className="text-xl mb-4">It seems that CORS is not enabled in your browser.</p>
        <p className="text-lg mb-4">Please enable CORS to access Bite Rush.</p>
        <a
          href="https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf"
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to download the CORS extension
        </a>
        <p className="text-lg mt-4 mb-2">If CORS is installed and allowed,</p>
        <button
          onClick={handleRefresh}
          className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200"
        >
          Refresh Page
        </button>
      </div>
    </div>
  );
};

export default CorsError;
