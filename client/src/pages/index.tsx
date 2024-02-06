import React from 'react';
import Head from 'next/head';
import Homepage from '@/pages/homepage';

export default function Home() {
   return (
      <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
         <Head>
            <title>0/1 COMBINE — bests technological solutions</title>
         </Head>
         <Homepage />
      </main>
   );
}
