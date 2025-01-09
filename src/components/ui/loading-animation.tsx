"use client";

import Image from "next/image";

const LoadingAnimation = () => {
  return (
    <div className="bg-foreground fixed inset-0 z-[1000]">
      <div className="min-h-svh lg:min-h-screen flex items-center justify-center">
        <div>
          <Image
            src="/logo-white.svg"
            alt="Loading..."
            width={100}
            height={100}
            priority
            className="z-10 animate-pulse"
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
