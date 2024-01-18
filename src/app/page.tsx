'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className="h-screen w-screen flex justify-center place-items-center">
      <div className="text-center">
        <p>work in progress</p>
        <div className="flex space-x-1">
          <p>check out:</p>
          <button
            className="text-blue-400 hover:text-blue-600 transition-colors duration-200 hover:cursor-pointer"
            onClick={() => router.push('https://github.com/emanpecson')}
          >
            https://github.com/emanpecson
          </button>
        </div>
      </div>
    </div>
  );
}
