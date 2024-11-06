"use client";
import styles from "../app/page.module.css";
import Link from "next/link";
import Image from "next/image";

const Integrations = () => {
  return (
    <div>
      <div className="container w-full max-w-6xl px-5 md:px-10 mx-auto undefined">
        <p className="max-w-xl text-2xl leading-normal">
          Aurora is in a state of general availability, with full integrations
          of all infrastructure components required for a flourishing ecosystem.
        </p>
        <div className="mt-10 border border-gray-700 divide-y divide-gray-700 md:grid md:grid-cols-3 md:divide-y-0 md:divide-x rounded-t-md">
          <div className="flex flex-col p-8">
            <div className="flex items-center space-x-2">
              <div className="text-lg">Block Explorer</div>
              <div className={styles.bgprimary}>Operational</div>
            </div>
            <div className="flex-1 mt-1 text-sm text-secondary">
              Search for real-time and historical information about the
              blockchain.
            </div>
            <div className="mt-4 text-sm">
              <a
                className="inline-flex items-center space-x-1 text-sm font-medium hover:text-secondary"
                href="#"
              >
                <span>Visit Aurora Block Explorer</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-3 h-3"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-col p-8">
            <div className="flex items-center space-x-2">
              <div className="text-lg">Price Oracle</div>
              <div className={styles.bgprimary}>Operational</div>
            </div>
            <div className="flex-1 mt-1 text-sm text-secondary">
              Consult price information about assets within or outside of the
              network.
            </div>
            <div className="mt-4 text-sm">
              <a
                className="inline-flex items-center space-x-1 text-sm font-medium hover:text-secondary"
                href="#"
              >
                <span>Browse oracles</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-3 h-3"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-col p-8">
            <div className="flex items-center space-x-2">
              <div className="text-lg">AMM Exchange</div>
              <div className={styles.bgprimary}>Operational</div>
            </div>
            <div className="flex-1 mt-1 text-sm text-secondary">
              Automatic trading of digital assets, by using liquidity pools as a
              replacement for traditional buyer and seller markets.
            </div>
            <div className="mt-4 text-sm">
              <a
                className="inline-flex items-center space-x-1 text-sm font-medium hover:text-secondary"
                href="#"
              >
                <span>Browse exchanges</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-3 h-3"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border border-t-0 border-gray-700 divide-y divide-gray-700 md:grid md:grid-cols-3 md:divide-y-0 md:divide-x rounded-b-md">
          <div className="flex flex-col p-8">
            <div className="flex items-center space-x-2">
              <div className="text-lg">Bridge</div>
              <div className={styles.bgprimary}>Operational</div>
            </div>
            <div className="flex-1 mt-1 text-sm text-secondary">
              The Rainbow Bridge is the official bridge for transferring tokens
              between Ethereum, NEAR
            </div>
            <div className="mt-4 text-sm">
              <a
                className="inline-flex items-center space-x-1 text-sm font-medium hover:text-secondary"
                href="#"
              >
                <span>Visit Rainbow Bridge</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-3 h-3"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-col p-8">
            <div className="flex items-center space-x-2">
              <div className="text-lg">Data Index</div>
              <div className={styles.bgprimary}>Operational</div>
            </div>
            <div className="flex-1 mt-1 text-sm text-secondary">
              Efficiently find and retrieve data that live on the blockchain.
            </div>
            <div className="mt-4 text-sm">
              <a
                className="inline-flex items-center space-x-1 text-sm font-medium hover:text-secondary"
                href="#"
              >
                <span>Browse indexers</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-3 h-3"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <a
            className="items-center justify-center hidden p-8 space-x-1 md:flex hover:text-secondary"
            href="#"
          >
            <span>Full ecosystem</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="w-3 h-3"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Integrations;
