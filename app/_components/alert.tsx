import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Alert: React.FC<{ result: boolean }> = ({ result }) => {
  const [status, setStatus] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    setStatus(result);
  }, [result]);

  const handleDismiss = () => {
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      role="alert"
      aria-live="assertive"
      className="w-[300px] h-[100px] rounded-xl border border-gray-100 bg-white p-4 shadow-lg absolute -top-10 right-24 z-50 transition-opacity duration-300 flex items-center"
    >
      <div className="flex items-center gap-4 w-full">
        <span className={status ? 'text-green-600' : 'text-red-600'}>
          {status ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ) : (
            <Image src='/error.svg' alt='error' width={22} height={22} />
          )}
        </span>

        <div className="flex-1">
          <strong className="block font-medium text-gray-900">
            {status ? 'Sent successfully' : 'Sending failed'}
          </strong>
          <p className="mt-1 text-sm text-gray-700">
            {status ? 'Sent via email' : 'Not sent via email'}
          </p>
        </div>

        <button
          className="text-gray-500 transition hover:text-gray-600"
          onClick={handleDismiss}
        >
          <span className="sr-only">Dismiss popup</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Alert;
