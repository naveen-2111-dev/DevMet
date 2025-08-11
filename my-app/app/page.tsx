"use client"
import React from 'react';
// import PrimaryButton from "@/components/ui/button";
import { Button } from "@/components/ui/button"


const EventPlatformLanding: React.FC = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-8 relative"
      style={{
        backgroundColor: '#101E23',
        backgroundImage: `
          linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px),
          linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px', // Size of each square
      }}
    >
      <div className="max-w-4xl  font-mono w-full flex items-center justify-between">

        {/* Left side - Image */}
        <div className="relative">
          <div className="bg-black p-4 rounded-t-lg shadow-xl transform -rotate-1 relative overflow-hidden">
            <div className="w-80 h-60 bg-black rounded overflow-hidden relative mb-4">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-32 h-40 bg-slate-700 rounded-t-full relative">
                    <div className="w-16 h-16 bg-amber-700 rounded-full absolute -top-8 left-1/2 transform -translate-x-1/2"></div>
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-12 h-4 border-2 border-slate-800 rounded-lg bg-transparent"></div>
                    </div>
                    <div className="w-28 h-32 bg-green-300 absolute top-4 left-1/2 transform -translate-x-1/2 rounded-t-lg"></div>
                    <div className="absolute top-16 left-8 w-2 h-8 bg-slate-800 rounded"></div>
                    <div className="absolute top-14 left-7 w-4 h-4 bg-slate-900 rounded-full"></div>
                  </div>
                  <div className="w-40 h-8 bg-slate-600 absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-teal-800 opacity-30"></div>
            </div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="ml-16 text-white max-w-md">
          <h1 className="text-4xl font-bold mb-6 leading-tight">
            Innovation kicks off right here.
          </h1>
          <p className="text-slate-300 text-lg mb-8 leading-relaxed">
            Set up an event page, invite friends, and sell tickets. Host a memorable event today.
          </p>
          <Button className='px-50 py-8 rounded-full text-2xl' >Join Your First Event</Button>
        </div>
      </div>

      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-slate-700 rounded-full opacity-10"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-cyan-400 rounded-full opacity-5"></div>
      </div>
    </div>
  );
};

export default EventPlatformLanding;
