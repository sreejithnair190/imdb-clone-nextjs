import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center mt-4">
      <Image src="loader.svg" width="100" height="100" alt="loading..."></Image>
    </div>
  );
};

export default Loading;
