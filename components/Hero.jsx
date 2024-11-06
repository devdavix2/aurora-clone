"use client";
import styles from "../app/page.module.css";

const Hero = () => {
  return (
    <main className="flex flex-col flex-1 w-full">
      <div className="pt-12 md:pt-32">
        <div className="container w-full max-w-6xl px-5 md:px-10 mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-2xl md:text-4xl font-black !leading-[1.1] ">
              <span className={styles.herotext}>Shooting for the stars.</span>
            </h1>
            <p className="max-w-5xl mx-auto mt-6 text-xl sm:text-2xl md:text-3xl !leading-normal">
              Aurora is a next-generation Ethereum compatible blockchain and
              ecosystem that runs on the NEAR Protocol, and powers the
              innovations behind Aurora Cloud&mdash;the fastest path for Web2
              businesses to capture the value of Web3.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <ul className="flex justify-center space-x-5 leading-snug text-center md:space-x-10">
            <li className="space-y-1">
              <div className={styles.textprimary}>
                <span className="text-lg self-center mt-1 -ml-0.5">~</span>
                <span className="ml-0.5 text-3xl">1 sec</span>
              </div>
              <div className={styles.leadingtight}>Avg block time</div>
            </li>
            <li className="space-y-1">
              <div className={styles.textprimary}>
                <span className="text-lg self-center mt-1 -ml-0.5">~</span>
                <span className="ml-0.5 text-3xl">2 sec</span>
              </div>
              <div className={styles.leadingtight}>Transaction finality</div>
            </li>
            <li className="space-y-1">
              <div className={styles.textprimary}>
                <span className="text-lg self-center mt-1 -ml-0.5">~$</span>
                <span className="ml-0.5 text-3xl">0.02</span>
              </div>
              <div>Transaction cost</div>
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap  items-center justify-center gap-4 mt-10 md:mt-20">
          <a
            className="relative items-center justify-center white-space-nowrap whitespace-nowrap transition-transform hover:scale-103 active:scale-95 active:transform focus:outline-none font-bold text-sm flex-shrink-0 inline-flex bg-gray-900 text-white dark:bg-white dark:text-gray-900 h-12 rounded-md px-8"
            href="#"
          >
            Get Started
          </a>
          <a
            id="connect-wallet"
            className="relative items-center justify-center whitespace-nowrap transition-transform hover:scale-103 active:scale-95 active:transform focus:outline-none font-bold  flex-shrink-0 inline-flex bg-black text-white dark:text-black dark:bg-white h-8 text-sm rounded-md px-3"
          >
            Connect Wallet
          </a>

          <a
            className="relative items-center justify-center white-space-nowrap whitespace-nowrap transition-transform hover:scale-103 active:scale-95 active:transform focus:outline-none font-bold text-sm flex-shrink-0 inline-flex bg-gray-900 text-white dark:bg-white dark:text-gray-900 h-12 rounded-md px-8"
            target="_blank"
            rel="noreferrer"
            href="#"
          >
            Visit Aurora Cloud
          </a>
          <a
            className="relative text-sm font-bold items-center justify-center white-space-nowrap whitespace-nowrap transition-transform hover:scale-103 active:scale-95 active:transform focus:outline-none  flex-shrink-0 inline-flex bg-[#1a373d] text-white hover:backdrop-brightness-200 h-12 rounded-md px-8"
            target="_blank"
            rel="noreferrer"
            href="#"
          >
            Join Discord
          </a>
        </div>
      </div>
    </main>
  );
};

export default Hero;
