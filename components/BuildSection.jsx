"use client";
import styles from "../app/page.module.css";
import React, { useEffect, useState } from "react";

const BuildSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures client-side rendering for SVG
  }, []);

  return (
    <div>
      <div className="flex flex-wrap space-x-2 w-full mt-48 mx-5">
        <div className="flex px-5 md:px-2 flex-1 w-full md:w-1/2 flex-col">
          <h2 className="text-xl md:text-6xl space-y-4 font-black">
            <span className={styles.buildtext}> Build on Aurora.</span>
            <div> Simple. Fast. Affordable. </div>
          </h2>
          <p className="mt-5 text-2xl">
            Aurora provides the Ethereum development experience, with
            layer-2-like speed and scalability. If you are an Ethereum
            developer, getting started on Aurora is as easy as changing the RPC
            endpoint.
          </p>
          <div className="flex items-center mt-10 space-x-4">
            <a
              className="relative items-center justify-center transition-transform hover:scale-105 active:scale-95 focus:outline-none font-medium flex-shrink-0 inline-flex bg-gray-900 text-white dark:bg-white dark:text-gray-900 h-12 rounded-md px-8"
              target="_blank"
              rel="noreferrer"
              href="#"
            >
              Read docs
            </a>
            <a
              className="relative items-center justify-center transition-transform hover:scale-105 active:scale-95 focus:outline-none font-medium flex-shrink-0 inline-flex bg-[#1a373d] text-white hover:backdrop-brightness-200 h-12 rounded-md px-8"
              target="_blank"
              rel="noreferrer"
              href="#"
            >
              Join Discord
            </a>
          </div>
        </div>

        {isClient && (
          <svg width="600" height="500" xmlns="http://www.w3.org/2000/svg">
            <g
              transform="matrix(-1 0 0 1 484 0)"
              fill="#FFF"
              fillRule="evenodd"
            >
              <circle opacity=".02" cx="201.5" cy="201.5" r="201.5"></circle>
              <path
                d="M132 303a37.501 37.501 0 00-33.54 20.722l-62.498 125A37.501 37.501 0 0069.502 503h124.995a37.501 37.501 0 0033.54-54.278l-62.497-125A37.501 37.501 0 00132 303z"
                opacity=".05"
              ></path>
              {[...Array(6)].map((_, index) => (
                <circle
                  key={index}
                  cx={316.5 + index * 32}
                  cy="347"
                  r="7.5"
                  opacity=".1"
                ></circle>
              ))}
            </g>
          </svg>
        )}
      </div>

      <div className="overflow-hidden">
        <svg
          viewBox="0 0 1200 198"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full mt-16 mb-8 pointer-events-none md:mt-24 md:-mb-8 md:opacity-60"
        >
          {/* SVG Paths */}
        </svg>
      </div>
    </div>
  );
};

export default BuildSection;
