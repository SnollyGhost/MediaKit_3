import React from 'react';
import { motion } from "framer-motion";
import { BRANDS } from '../lib/data';

export const BrandLogos = () => {
  return (
    <section className="py-24 bg-black overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
         <div className="text-[10px] font-display font-medium tracking-[0.3em] uppercase opacity-30">
            Trusted by Global Tech & Web3 Entities
         </div>
      </div>
      
      <div className="flex relative items-center">
        {/* Infinite Scroll Effect - Tripled for seamlessness with fewer items */}
        <div className="flex animate-scroll whitespace-nowrap gap-16 md:gap-24">
          {[...BRANDS, ...BRANDS, ...BRANDS].map((brand, idx) => {
            const isHawi = brand.name.toLowerCase().includes('hawi');
            const isEbw = brand.name.toLowerCase().includes('ebw');
            const isArifGet = brand.name.toLowerCase().includes('arifget');
            const isEhud = brand.name.toLowerCase().includes('ehud');
            const isHulugram = brand.name.toLowerCase().includes('hulugram');

            return (
              <div 
                key={idx} 
                className="flex-shrink-0 flex items-center justify-center opacity-95 md:opacity-85 hover:opacity-100 transition-all duration-500 cursor-pointer hover:scale-105"
              >
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className={`object-contain transition-all duration-500 ${
                    isEhud
                      ? 'h-12 md:h-14 w-auto'
                      : isHulugram
                      ? 'h-12 md:h-14 w-auto'
                      : isArifGet
                      ? 'h-10 md:h-12 w-auto'
                      : isHawi || isEbw
                      ? 'h-[52px] md:h-[60px] w-auto'
                      : 'h-10 md:h-12'
                  }`}
                  referrerPolicy="no-referrer"
                />
                <span className="ml-4 text-base md:text-lg font-display font-medium tracking-widest uppercase text-white/80 transition-colors duration-500">{brand.name}</span>
              </div>
            );
          })}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}} />
    </section>
  );
};
