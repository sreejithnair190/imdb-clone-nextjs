"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: {
    statusCode?: number;
    message?: string;
  } | null;
  reset: () => void;
}

const Error = ({ error, reset }: ErrorProps) => {
  useEffect(() => console.log(error), [error]);
  return (
    <div className="text-center mt-10">
      <h1>Something went wrong! Please try again later.</h1>
      <button
        onClick={() => reset()}
        className="hover:bg-amber-700 bg-amber-500 rounded-lg p-2 mt-2"
      >
        Try Again
      </button>
    </div>
  );
};

export default Error;
