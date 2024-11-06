"use client";
import Link from "next/link";
import styles from "../app/page.module.css";
import React, { useState } from "react";
import { ConnectButton } from "thirdweb/react";
import { client } from "../components/client";
import { createWallet } from "thirdweb/wallets";

function CustomWallets() {
  const recommendedWallets = [];
  const wallets = [
    createWallet("io.metamask"),
    createWallet("com.coinbase.wallet"),
    createWallet("app.phantom"),
    createWallet("com.trustwallet.app"),
  ];

  return (
    <ConnectButton
      client={client}
      wallets={wallets}
      connectModal={{
        size: "compact",
      }}
      connectButton={{
        label: "Connect Wallet",
        style: {
          padding: "10px",
          height: "35px",
          backgroundColor: "white",
          textSize: "18px",
          fontWeight: "bold",
        },
      }}
    />
  );
}

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);

    const dropdownButton = document.getElementById("dropdownButton");
    const dropdownMenu = document.getElementById("dropdownMenu");
    const dropdownIcon = document.getElementById("dropdownIcon");

    dropdownButton.addEventListener("click", () => {
      dropdownMenu.classList.toggle("hidden");
      dropdownIcon.classList.toggle("rotate-180");
    });

    const dropdownButton2 = document.getElementById("dropdownButton2");
    const dropdownMenu2 = document.getElementById("dropdownMenu2");
    const dropdownIcon2 = document.getElementById("dropdownIcon2");

    dropdownButton2.addEventListener("click", () => {
      dropdownMenu2.classList.toggle("hidden");
      dropdownIcon2.classList.toggle("rotate-180");
    });

    const dropdownButton3 = document.getElementById("dropdownButton3");
    const dropdownMenu3 = document.getElementById("dropdownMenu3");
    const dropdownIcon3 = document.getElementById("dropdownIcon3");

    dropdownButton3.addEventListener("click", () => {
      dropdownMenu3.classList.toggle("hidden");
      dropdownIcon3.classList.toggle("rotate-180");
    });

    const dropdownButton4 = document.getElementById("dropdownButton4");
    const dropdownMenu4 = document.getElementById("dropdownMenu4");
    const dropdownIcon4 = document.getElementById("dropdownIcon4");

    dropdownButton4.addEventListener("click", () => {
      dropdownMenu4.classList.toggle("hidden");
      dropdownIcon4.classList.toggle("rotate-180");
    });

    const dropdownButton5 = document.getElementById("dropdownButton5");
    const dropdownMenu5 = document.getElementById("dropdownMenu5");
    const dropdownIcon5 = document.getElementById("dropdownIcon5");

    dropdownButton5.addEventListener("click", () => {
      dropdownMenu5.classList.toggle("hidden");
      dropdownIcon5.classList.toggle("rotate-180");
    });

    const dropdownButton6 = document.getElementById("dropdownButton6");
    const dropdownMenu6 = document.getElementById("dropdownMenu6");
    const dropdownIcon6 = document.getElementById("dropdownIcon6");

    dropdownButton6.addEventListener("click", () => {
      dropdownMenu6.classList.toggle("hidden");
      dropdownIcon6.classList.toggle("rotate-180");
    });
  };

  return (
    <header className={styles.header} style={{ zIndex: 1000 }}>
      <div className="flex justify-center w-full text-sm leading-none text-900 font-bold bg-gradient-to-r from-[#fdfd49] via-[#c5f745] to-[#5eeb5c]">
        <Link
          href="/"
          className="flex flex-col items-center justify-center flex-1 px-3 py-2 font-medium text-center text-black sm:py-4 sm:flex-row group"
        >
          <span>
            Get 50 free transactions per month with Aurora Pass, our new mobile
            wallet.
          </span>
          <div className="flex items-center mt-2 sm:ml-2 sm:mt-0">
            <span className="underline">Read more</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </Link>
      </div>
      <nav className="sticky top-0 w-full bg-[#092022]">
        <div className="relative z-10">
          <div className="w-full max-w-[1400px] px-6 md:px-16 mx-5 flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" aria-label="Home" className="flex items-center">
                {/* Logo SVG */}
                <svg viewBox="0 0 135 30" className="h-7">
                  <path
                    d="M96.766 7.471c1.506.385 2.147.74 3.296 1.79 2.012 1.878 2.758 4.614 2.027 7.454-.835 3.283-3.787 5.457-7.306 5.398a18.454 18.454 0 01-1.49-.089c-.731-.118-1.999-.65-2.774-1.168-3.802-2.514-4.31-8.253-1.014-11.477a7.308 7.308 0 013.683-1.982c1.372-.28 2.221-.266 3.578.074zm-31.341 0l1.223.044 1.222.045.045 4.141c.06 6.05-.194 7.395-1.685 8.874-1.088 1.065-2.058 1.435-4.026 1.494-.82.03-1.7-.015-1.968-.074-2.207-.562-3.713-2.278-4.085-4.63-.075-.517-.12-2.928-.105-5.368l.045-4.437h2.386l.074 4.954c.075 4.925.075 4.955.448 5.695 1.133 2.248 4.741 2.262 5.934.03l.402-.77.09-9.998zm-18.37.015l.299.784c.164.414.835 2.16 1.506 3.875.67 1.715 1.401 3.608 1.64 4.215.223.606.79 2.056 1.252 3.21.462 1.153.835 2.144.835 2.188 0 .045-.566.074-1.252.074-1.223 0-1.253-.015-1.402-.4-.09-.236-.984-2.543-1.968-5.146-2.296-6.034-2.281-5.99-2.475-5.99-.09 0-.224.222-.313.488-.09.251-.716 1.908-1.387 3.653-.67 1.745-1.58 4.112-2.013 5.25l-.775 2.071-1.208.045c-1.029.03-1.223 0-1.223-.193 0-.266 5.204-13.666 5.413-13.932.09-.133.611-.192 1.61-.192h1.461zm29.046 0c3.861 0 4.726.133 5.83.932.387.28.85.813 1.118 1.272.388.695.477 1.005.522 2.07.044 1.035 0 1.42-.254 2.115-.402 1.02-1.312 1.908-2.385 2.293-.418.147-.76.295-.76.34 0 .044.879 1.183 1.938 2.544 1.073 1.36 1.938 2.529 1.938 2.617 0 .222-2.117.207-2.58 0-.208-.088-1.237-1.286-2.28-2.662l-1.924-2.484-1.074-.015h-1.088v5.324h-2.386l.03-3.653.045-3.668 3.429-.074c2.475-.059 3.534-.133 3.817-.28 1.088-.548 1.536-2.264.85-3.255-.686-1.02-1.044-1.109-4.25-1.198L73.76 9.63l-.462-.458a1.788 1.788 0 01-.537-1.065l-.09-.621h3.43zm33.34.03c3.548.044 3.801.059 4.502.384 1.58.725 2.43 2.011 2.535 3.816.119 2.277-.85 3.845-2.788 4.481-.314.104-.567.252-.567.326 0 .073.85 1.212 1.879 2.529 1.028 1.316 1.908 2.484 1.953 2.603.12.295-2.475.192-2.863-.119-.149-.118-1.103-1.301-2.132-2.618l-1.849-2.41h-1.014c-.79 0-1.029.059-1.103.236-.045.133-.09 1.331-.09 2.663v2.425h-2.385v-3.46c0-1.909.044-3.565.09-3.698.074-.207.521-.237 3.324-.237 3.623 0 4.13-.118 4.801-1.05.477-.665.477-1.952.015-2.603-.611-.843-1.148-.99-4.205-1.08-2.251-.059-2.847-.118-3.16-.325-.478-.31-.91-1.213-.79-1.612.104-.296.178-.296 3.846-.252zm19.815.044l.85 2.144a400.5 400.5 0 011.327 3.328c.253.65 1.103 2.84 1.878 4.851.79 2.012 1.432 3.727 1.432 3.801 0 .089-.537.148-1.238.148h-1.222l-1.104-2.914c-2.34-6.167-3.28-8.548-3.414-8.592-.134-.045-.462.724-2.028 4.777-.268.74-.954 2.484-1.491 3.89-.537 1.39-.984 2.617-.984 2.691 0 .089-.522.148-1.267.148-.731 0-1.268-.06-1.268-.148 0-.103 3.862-10.101 5.204-13.459l.253-.665h3.072zM94.768 9.556c-3.533 0-5.844 3.299-4.756 6.819.283.931.447 1.198 1.252 1.996.76.755 1.104.976 1.894 1.228a5.17 5.17 0 003.951-.281c2.803-1.36 3.698-4.97 1.924-7.647-.925-1.39-2.386-2.115-4.265-2.115z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M15 2.292a3.317 3.317 0 012.981 1.841l9.375 18.75a3.333 3.333 0 01-2.981 4.825H5.625a3.333 3.333 0 01-2.98-4.825l9.374-18.75A3.317 3.317 0 0115 2.292M15 0a5.625 5.625 0 00-5.031 3.108L.594 21.858A5.625 5.625 0 005.625 30h18.75a5.625 5.625 0 005.03-8.142l-9.374-18.75A5.625 5.625 0 0015 0z"
                    fill="currentColor"
                    className="text-primary"
                  ></path>
                </svg>

                <span className="text-white text-3xl font-extrabold pl-"></span>
              </Link>
            </div>

            {/* Centered Navigation Links */}
            <div className="flex-grow sm:block  justify-center hidden">
              <ul className="flex space-x-10 mx-12">
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-gray-300 transition"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-gray-300 transition"
                  >
                    Ecosytem
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-gray-300 transition"
                  >
                    Community
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-gray-300 transition"
                  >
                    Developers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-gray-300 transition"
                  >
                    Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-gray-300 transition"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div className="lg:hidden gap-10 mx-25 px-10 flex ">
              <button
                id="mobile-menu-toggle"
                onClick={handleToggle}
                className="flex px-20"
              >
                {isOpen ? "" : ""}
                <span className="p-2 rounded-md bg-translucent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>

            <div id="mobile-menu" className={isOpen ? "block" : "hidden"}>
              <div className="fixed z-50 overflow-auto origin-top-right transform cursor-auto left-5 right-5 md:left-10 md:right-10 top-32 sm:top-28 rounded-xl bg-[#092022]  bg-opacity-90 shadow-xl max-h-[88vh] lg:hidden scale-100 opacity-100">
                <div className="p-8 pt-4 text-lg leading-loose">
                  <div className="border-b border-white divide-y divide-white border-opacity-10 divide-opacity-10">
                    <div className="flex flex-col">
                      <button
                        id="dropdownButton"
                        className="flex items-center justify-between h-12"
                      >
                        <div className="flex-shrink-0 font-medium">About</div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="w-5 h-5 transition-transform transform rotate-0"
                          id="dropdownIcon"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </button>

                      <div id="dropdownMenu" className="hidden mb-8">
                        <a
                          className="block text-left text-secondary dark:hover:text-white group"
                          href="#"
                        >
                          <span>About Aurora</span>
                        </a>
                        <a
                          className="block text-left text-secondary dark:hover:text-white group"
                          href="#"
                        >
                          <span> News &amp; Updates</span>
                        </a>
                        <a
                          className="block text-left text-secondary dark:hover:text-white group"
                          href="https://brand.aurora.dev/"
                        >
                          <span>Press Kit</span>
                        </a>
                        <a
                          className="block text-left text-secondary dark:hover:text-white group"
                          href="#"
                        >
                          <span>Videos</span>
                        </a>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <button
                        id="dropdownButton2"
                        className="flex items-center justify-between h-12"
                      >
                        <div className="flex-shrink-0 font-medium">
                          Ecosystem
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="w-5 h-5 transition-transform transform rotate-0"
                          id="dropdownIcon2"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </button>

                      <div id="dropdownMenu2" className="hidden mb-8">
                        <a
                          className="block text-left text-secondary dark:hover:text-white group"
                          href="#"
                        >
                          <span> Ecosystem Apps</span>
                        </a>
                        <a
                          className="block text-left text-secondary dark:hover:text-white group"
                          href="#"
                        >
                          <span> Tokens</span>
                        </a>
                        <a
                          className="block text-left text-secondary dark:hover:text-white group"
                          href="https://brand.aurora.dev/"
                        >
                          <span>Partner Program</span>
                        </a>
                        <a
                          className="block text-left text-secondary dark:hover:text-white group"
                          href="#"
                        >
                          <span> Aurora DAO</span>
                        </a>
                        <a
                          className="block text-left text-secondary dark:hover:text-white group"
                          href="#"
                        >
                          <span> AURORA Token</span>
                        </a>
                        <a
                          className="block text-left text-secondary dark:hover:text-white group"
                          href="#"
                        >
                          <span> Faucet</span>
                        </a>
                        <a
                          className="block text-left text-secondary dark:hover:text-white group"
                          href="#"
                        >
                          <span>
                            {" "}
                            Rainbow Bridge{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                              className="inline-block w-3 h-3 ml-1 -rotate-45 opacity-50 group-hover:opacity-100"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <button
                        id="dropdownButton3"
                        className="flex items-center justify-between h-12"
                      >
                        <div className="flex-shrink-0 font-medium">
                          {" "}
                          Community
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="w-5 h-5 transition-transform transform rotate-0"
                          id="dropdownIcon3"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </button>

                      <div id="dropdownMenu3" className="hidden mb-8">
                        <a
                          className="block text-left text-secondary dark:hover:text-white group"
                          href="#"
                        >
                          <span> Discord</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="inline-block w-3 h-3 ml-1 -rotate-45 opacity-50 group-hover:opacity-100"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </a>
                        <a
                          className="block text-left text-secondary dark:hover:text-white group"
                          href="#"
                        >
                          <span> Discussion Forum</span>{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="inline-block w-3 h-3 ml-1 -rotate-45 opacity-50 group-hover:opacity-100"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </a>
                        <a
                          className="block text-left text-secondary dark:hover:text-white group"
                          href="https://brand.aurora.dev/"
                        >
                          <span> Telegram</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="inline-block w-3 h-3 ml-1 -rotate-45 opacity-50 group-hover:opacity-100"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </a>
                        <a
                          className="block text-left text-secondary dark:hover:text-white group"
                          href="#"
                        >
                          <span> X</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="inline-block w-3 h-3 ml-1 -rotate-45 opacity-50 group-hover:opacity-100"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </a>
                        <a
                          className="block text-left text-secondary dark:hover:text-white group"
                          href="#"
                        >
                          <span> Youtube</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="inline-block w-3 h-3 ml-1 -rotate-45 opacity-50 group-hover:opacity-100"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </a>
                        <a
                          className="block text-left text-secondary dark:hover:text-white group"
                          href="#"
                        >
                          <span> GitHub</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="inline-block w-3 h-3 ml-1 -rotate-45 opacity-50 group-hover:opacity-100"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </a>
                        <a
                          className="block text-left text-secondary dark:hover:text-white group"
                          href="#"
                        >
                          <span> Near.Social</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="inline-block w-3 h-3 ml-1 -rotate-45 opacity-50 group-hover:opacity-100"
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

                    <div className="flex flex-col">
                      <button
                        id="dropdownButton4"
                        className="flex items-center justify-between h-12"
                      >
                        <div className="flex-shrink-0 font-medium">
                          {" "}
                          Developers
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="w-5 h-5 transition-transform transform rotate-0"
                          id="dropdownIcon4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </button>

                      <div id="dropdownMenu4" className="hidden mb-8">
                        <a
                          className="block text-left text-secondary dark:hover:text-white group"
                          href="#"
                        >
                          <span> Developer Portal</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="inline-block w-3 h-3 ml-1 -rotate-45 opacity-50 group-hover:opacity-100"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </a>
                        <a
                          className="block text-left text-secondary dark:hover:text-white group"
                          href="#"
                        >
                          <span> Documentation</span>{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="inline-block w-3 h-3 ml-1 -rotate-45 opacity-50 group-hover:opacity-100"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </a>
                        <a
                          className="block text-left text-secondary dark:hover:text-white group"
                          href="https://brand.aurora.dev/"
                        >
                          <span> Block Explorer</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="inline-block w-3 h-3 ml-1 -rotate-45 opacity-50 group-hover:opacity-100"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </a>
                        <a
                          className="block text-left text-secondary dark:hover:text-white group"
                          href="#"
                        >
                          <span> Faucet</span>
                        </a>
                        <a
                          className="block text-left text-secondary dark:hover:text-white group"
                          href="#"
                        >
                          <span> Testnet Bridge</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="inline-block w-3 h-3 ml-1 -rotate-45 opacity-50 group-hover:opacity-100"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </a>
                        <a
                          className="block text-left text-secondary dark:hover:text-white group"
                          href="#"
                        >
                          <span> Audits</span>
                        </a>
                        <a
                          className="block text-left text-secondary dark:hover:text-white group"
                          href="#"
                        >
                          <span> AuditsOne Bug Bounty</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="inline-block w-3 h-3 ml-1 -rotate-45 opacity-50 group-hover:opacity-100"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </a>
                        <a
                          className="block text-left text-secondary dark:hover:text-white group"
                          href="#"
                        >
                          <span> HackenProof Bug Bounty</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="inline-block w-3 h-3 ml-1 -rotate-45 opacity-50 group-hover:opacity-100"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </a>

                        <a
                          className="block text-left text-secondary dark:hover:text-white group"
                          href="#"
                        >
                          <span> Discord</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="inline-block w-3 h-3 ml-1 -rotate-45 opacity-50 group-hover:opacity-100"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </a>
                        <a
                          className="block text-left text-secondary dark:hover:text-white group"
                          href="#"
                        >
                          <span> Github</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="inline-block w-3 h-3 ml-1 -rotate-45 opacity-50 group-hover:opacity-100"
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

                    <div className="flex flex-col">
                      <button
                        id="dropdownButton5"
                        className="flex items-center justify-between h-12"
                      >
                        <div className="flex-shrink-0 font-medium">
                          {" "}
                          Support
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="w-5 h-5 transition-transform transform rotate-0"
                          id="dropdownIcon5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </button>

                      <div id="dropdownMenu5" className="hidden mb-8">
                        <a
                          className="block text-left text-secondary dark:hover:text-white group"
                          href="#"
                        >
                          <span> Get Help</span>
                        </a>
                        <a
                          className="block text-left text-secondary dark:hover:text-white group"
                          href="#"
                        >
                          <span> Knowledge Base </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="inline-block w-3 h-3 ml-1 -rotate-45 opacity-50 group-hover:opacity-100"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </a>
                        <a
                          className="block text-left text-secondary dark:hover:text-white group"
                          href="#"
                        >
                          <span> Contact</span>
                        </a>
                        <a
                          className="block text-left text-secondary dark:hover:text-white group"
                          href="#"
                        >
                          <span> Discord</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="inline-block w-3 h-3 ml-1 -rotate-45 opacity-50 group-hover:opacity-100"
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

                    <a href="index.html" className="block hover:text-secondary">
                      Blog
                    </a>
                    <div className="space-x-3 mt-4">
                      <a
                        href="#"
                        className="relative mb-4 items-center px-3  justify-center whitespace-nowrap transition-transform hover:scale-103 active:scale-95 active:transform focus:outline-none font-medium flex-shrink-0 inline-flex bg-black text-white dark:text-black dark:bg-white h-8 text-sm rounded-md "
                      >
                        Get Started
                      </a>

                      <a id="connect-wallet">
                        <CustomWallets />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons on the Right */}
            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-2">
              <a
                href="#"
                className="relative items-center justify-center whitespace-nowrap transition-transform hover:scale-103 active:scale-95 active:transform focus:outline-none font-bold  flex-shrink-0 inline-flex bg-black text-white dark:text-black dark:bg-white h-8 text-sm rounded-md px-3"
              >
                Get Started
              </a>

              <a id="connect-wallet">
                <CustomWallets />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default MobileMenu;
