import Navbar from "../components/Navbar";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Main() {
  const [animateKey, setAnimateKey] = useState(0);

  useEffect(() => {
    AOS.init();
    const interval = setInterval(() => {
      setAnimateKey((prev) => prev + 1);
    }, 2000); // Har 2 soniyada qayta animatsiya
    return () => clearInterval(interval); // Tozalash
  }, []);
  return (
    <div>
      <div className="w-full min-h-[auto] bg-img container container-xl pb1">
        <Navbar />
        <section className="w-full flex flex-col items-center justify-center text-center gap-[50px] pb2">
          <div className="w-full flex flex-col items-center justify-center gap-[20px]">
            <img
              data-aos="flip-down"
              className="md:w-[520px] md:h-[520px]"
              src="https://www.ponke.xyz/images/hero2.svg"
              alt=""
            />
            <h3 className="text-[27px] font-family-bold font-[1000] uppercase">
              The Golden Child of Solana
            </h3>
            <button
              data-aos="flip-left"
              class="md:w-[180px] h-[70px] font-family-bold text-white md:text-3xl text-2xl bg-red border-4 rounded-0 border-black shadow md:px-8 px-6 md:py-2 md:pt-4 py-1 pt-3 tracking-wide transition-all md:mt-10 mt-10 font-pretty md:rotate-[-4deg] rotate-[-2deg] w-[300px] opacity-100 md:hover:scale-105"
            >
              Explore
            </button>
          </div>
          <div className="w-full flex justify-between items-center">
            <div
              className="w-full flex gap-4 items-center md:justify-start justify-center"
              data-aos="fade-down"
            >
              <a href="https://twitter.com/PONKESOL">
                <div class="w-[43px] h-[43px] bg-[#000] relative md:size-11 size-10 md:hover:scale-105 rotate-[5deg]">
                  <img
                    src="https://www.ponke.xyz/_next/image?url=%2Fimg%2Fx.png&w=1920&q=75"
                    alt=""
                  />
                </div>
              </a>
              <a href="https://twitter.com/PONKESOL">
                <div class="w-[43px] h-[43px] bg-[#000] relative md:size-11 size-10 md:hover:scale-105 rotate-[-5deg]">
                  <img
                    src="https://www.ponke.xyz/_next/image?url=%2Fimg%2Ftelegram.png&w=1920&q=75"
                    alt=""
                  />
                </div>
              </a>
              <a
                href="https://twitter.com/PONKESOL"
                className="w-[43px] h-[43px] p-[10px] bg-[#000] flex justify-center items-center md:hover:scale-105 rotate-[5deg] pl-[30px]"
              >
                <div class="md:w-[43px] md:h-[43px] bg-[#000] md:size-8 size-10 rotate-[5deg] flex justify-center items-center">
                  <img
                    alt="head"
                    fetchpriority="high"
                    decoding="async"
                    data-nimg="fill"
                    class="bg-black p-[10px]"
                    style={{
                      position: "absolute",
                      height: "80%",
                      width: "80%",
                      left: "3px",
                      top: "3px",
                      right: 0,
                      bottom: 0,
                      color: "transparent",
                    }}
                    src="https://www.ponke.xyz/img/instagram.svg"
                  />
                </div>
              </a>
              <a
                href="https://twitter.com/PONKESOL"
                className="w-[43px] h-[43px] p-[10px] bg-[#000] flex justify-center items-center md:hover:scale-105 rotate-[-5deg] pl-[30px]"
              >
                <div class="md:w-[43px] md:h-[43px] bg-[#000] md:size-8 size-10 rotate-[5deg] flex justify-center items-center">
                  <img
                    alt="head"
                    fetchpriority="high"
                    decoding="async"
                    data-nimg="fill"
                    class="bg-black p-[10px]"
                    style={{
                      position: "absolute",
                      height: "80%",
                      width: "80%",
                      left: "3px",
                      top: "3px",
                      right: 0,
                      bottom: 0,
                      color: "transparent",
                    }}
                    src="https://www.ponke.xyz/images/tiktok.svg"
                  />
                </div>
              </a>
            </div>
            <div
              class="relative md:block hidden md:hover:scale-105 cursor-pointer transition-all"
              data-aos="fade-down"
            >
              <div class="absolute size-[90px] right-[-15px] top-[-49px]">
                <img
                  alt="head"
                  fetchpriority="high"
                  decoding="async"
                  data-nimg="fill"
                  class="wiggle"
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    color: "transparent",
                  }}
                  src="https://www.ponke.xyz/images/helmet.svg"
                />
              </div>
              <div class="w-[210px] h-[60px] flex justify-center items-center font-family-bold bg-green text-white px-4 py-3 text-[18px] border-4 border-black">
                Put On a Helmet
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="w-[100vh] h-[40px] border border-[3px] marquee-container font-family-bold text-[20px] font-bold bg-skin flex justify-center items-center">
        <div className="container container-xl">
          <div class="marquee">
            I AM PONKE, YOU ARE PONKE, WE ARE PONKE! I AM PONKE, YOU ARE PONKE,
            WE ARE PONKE! I AM PONKE, YOU ARE PONKE, WE ARE PONKE! I AM PONKE,
            YOU ARE PONKE, WE ARE PONKE!
          </div>
          <div class="marquee">
            I AM PONKE, YOU ARE PONKE, WE ARE PONKE! I AM PONKE, YOU ARE PONKE,
            WE ARE PONKE! I AM PONKE, YOU ARE PONKE, WE ARE PONKE! I AM PONKE,
            YOU ARE PONKE, WE ARE PONKE!
          </div>
        </div>
      </div>
      <section className="w-full min-h-[auto] bg-[#111] border-b-4 border-b-black md:pt-32 pt-8 md:pb-32 pb-20 md:px-0 px-2 relative z-[30] flex flex-col gap-[50px] justify-center items-center pb2">
        <div className="container container-xl flex flex-col gap-[50px] justify-center items-center pt1">
          <h1
            className="text-orange1 md:text-[100px] text-[52px] text-center md:leading-normal leading-[60px]"
            data-aos="fade-down"
          >
            EXCHANGES
          </h1>
          <h3
            className="text-center mb-5 md:text-3xl text-lg md:max-w-[600px] max-w-[340px] mx-auto text-white"
            data-aos="fade-up"
          >
            Ponke is available for trading on major exchanges.
          </h3>
          <div className="grid min-[900px]:grid-cols-3 grid-cols-2 max-w-[1200px] min-[1200px]:grid-cols-3 w-full mx-auto md:pt-20 pt-10 md:gap-5 gap-2 max-[1200px]:gap-2 px-5">
            <a
              data-aos="flip-down"
              href="https://www.revolut.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <button className="md:w-[375px] w-full h-[100px] md:h-[130px] bg-[#000] flex justify-center items-center border-[3px] border-white/20 text-black bg-black flex items-center justify-center p-2 px-5 gap-5 md:h-[130px] h-[100px] rounded cursor-pointer md:hover:scale-105 transition-all ease-in-out">
                <img
                  className="w-[290px] h-[auto] md:h-[70px]"
                  src="https://www.ponke.xyz/img/exchanges/revolut.png"
                  alt=""
                />
              </button>
            </a>
            <a
              data-aos="flip-down"
              href="https://www.revolut.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <button className="md:w-[375px] w-full h-[100px] md:h-[130px] bg-[#000] flex justify-center items-center border-[3px] border-white/20 text-black bg-black flex items-center justify-center p-2 px-5 gap-5 md:h-[130px] h-[100px] rounded cursor-pointer md:hover:scale-105 transition-all ease-in-out">
                <img
                  className="w-[290px] h-[auto] md:h-[70px]"
                  src="https://www.ponke.xyz/img/exchanges/kucoin.svg"
                  alt=""
                />
              </button>
            </a>
            <a
              data-aos="flip-right"
              href="https://www.revolut.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <button className="md:w-[375px] w-full h-[100px] md:h-[130px] bg-[#000] flex justify-center items-center border-[3px] border-white/20 text-black bg-black flex items-center justify-center p-2 px-5 gap-5 md:h-[130px] h-[100px] rounded cursor-pointer md:hover:scale-105 transition-all ease-in-out">
                <img
                  className="w-[290px] h-[auto] md:h-[70px]"
                  src="https://www.ponke.xyz/img/exchanges/kraken.webp"
                  alt=""
                />
              </button>
            </a>
            <a
              data-aos="flip-left"
              href="https://www.revolut.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <button className="md:w-[375px] w-full h-[100px] md:h-[130px] bg-[#000] flex justify-center items-center border-[3px] border-white/20 text-black bg-black flex items-center justify-center p-2 px-5 gap-5 md:h-[130px] h-[100px] rounded cursor-pointer md:hover:scale-105 transition-all ease-in-out">
                <img
                  className="w-[290px] h-[auto] md:h-[70px]"
                  src="https://www.ponke.xyz/img/exchanges/bithumb.svg"
                  alt=""
                />
              </button>
            </a>
            <a
              data-aos="flip-up"
              href="https://www.revolut.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <button className="md:w-[375px] w-full h-[100px] md:h-[130px] bg-[#000] flex justify-center items-center border-[3px] border-white/20 text-black bg-black flex items-center justify-center p-2 px-5 gap-5 md:h-[130px] h-[100px] rounded cursor-pointer md:hover:scale-105 transition-all ease-in-out">
                <img
                  className="w-[290px] h-[70px] md:h-[70px]"
                  src="https://www.ponke.xyz/img/exchanges/bybit.svg"
                  alt=""
                />
              </button>
            </a>
            <a
              data-aos="flip-right"
              href="https://www.revolut.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <button className="md:w-[375px] w-full h-[100px] md:h-[130px] bg-[#000] flex justify-center items-center border-[3px] border-white/20 text-black bg-black flex items-center justify-center p-2 px-5 gap-5 md:h-[130px] h-[100px] rounded cursor-pointer md:hover:scale-105 transition-all ease-in-out">
                <img
                  className="w-[290px] h-[auto] md:h-[70px]"
                  src="https://www.ponke.xyz/img/exchanges/binance_futures.png"
                  alt=""
                />
              </button>
            </a>
            <a
              data-aos="flip-left"
              href="https://www.revolut.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <button className="md:w-[375px] w-full h-[100px] md:h-[130px] bg-[#000] flex justify-center items-center border-[3px] border-white/20 text-black bg-black flex items-center justify-center p-2 px-5 gap-5 md:h-[130px] h-[100px] rounded cursor-pointer md:hover:scale-105 transition-all ease-in-out">
                <img
                  className="w-[290px] h-[auto] md:h-[70px]"
                  src="https://www.ponke.xyz/img/exchanges/cdc.svg"
                  alt=""
                />
              </button>
            </a>
            <a
              data-aos="flip-down"
              href="https://www.revolut.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <button className="md:w-[375px] w-full h-[100px] md:h-[130px] bg-[#000] flex justify-center items-center border-[3px] border-white/20 text-black bg-black flex items-center justify-center p-2 px-5 gap-5 md:h-[130px] h-[100px] rounded cursor-pointer md:hover:scale-105 transition-all ease-in-out">
                <img
                  className="w-[290px] h-[70px] md:h-[70px]"
                  src="https://www.ponke.xyz/img/exchanges/okx-dex.svg"
                  alt=""
                />
              </button>
            </a>
            <a
              data-aos="flip-right"
              href="https://www.revolut.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <button className="md:w-[375px] w-full h-[100px] md:h-[130px] bg-[#000] flex justify-center items-center border-[3px] border-white/20 text-black bg-black flex items-center justify-center p-2 px-5 gap-5 md:h-[130px] h-[100px] rounded cursor-pointer md:hover:scale-105 transition-all ease-in-out">
                <img
                  className="w-[290px] h-[auto] md:h-[70px]"
                  src="https://www.ponke.xyz/img/exchanges/gate.png"
                  alt=""
                />
              </button>
            </a>
            <a
              data-aos="flip-left"
              href="https://www.revolut.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <button className="md:w-[375px] w-full h-[100px] md:h-[130px] bg-[#000] flex justify-center items-center border-[3px] border-white/20 text-black bg-black flex items-center justify-center p-2 px-5 gap-5 md:h-[130px] h-[100px] rounded cursor-pointer md:hover:scale-105 transition-all ease-in-out">
                <img
                  className="w-[290px] h-[70px] md:h-[70px]"
                  src="https://www.ponke.xyz/img/exchanges/htx.svg"
                  alt=""
                />
              </button>
            </a>
            <a
              data-aos="flip-up"
              href="https://www.revolut.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <button className="md:w-[375px] w-full h-[100px] md:h-[130px] bg-[#000] flex justify-center items-center border-[3px] border-white/20 text-black bg-black flex items-center justify-center p-2 px-5 gap-5 md:h-[130px] h-[100px] rounded cursor-pointer md:hover:scale-105 transition-all ease-in-out">
                <img
                  className="w-[290px] h-[auto] md:h-[70px]"
                  src="https://www.ponke.xyz/img/exchanges/bitget.svg"
                  alt=""
                />
              </button>
            </a>
            <a
              data-aos="flip-right"
              href="https://www.revolut.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <button className="md:w-[375px] w-full h-[100px] md:h-[130px] bg-[#000] flex justify-center items-center border-[3px] border-white/20 text-black bg-black flex items-center justify-center p-2 px-5 gap-5 md:h-[130px] h-[100px] rounded cursor-pointer md:hover:scale-105 transition-all ease-in-out">
                <img
                  className="w-[290px] h-[auto] md:h-[70px]"
                  src="https://www.ponke.xyz/img/exchanges/woox.webp"
                  alt=""
                />
              </button>
            </a>
            <a
              data-aos="flip-left"
              href="https://www.revolut.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <button className="md:w-[375px] w-full h-[100px] md:h-[130px] bg-[#000] flex justify-center items-center border-[3px] border-white/20 text-black bg-black flex items-center justify-center p-2 px-5 gap-5 md:h-[130px] h-[100px] rounded cursor-pointer md:hover:scale-105 transition-all ease-in-out">
                <img
                  className="w-[290px] h-[auto] md:h-[70px]"
                  src="https://www.ponke.xyz/img/exchanges/poloniex.svg"
                  alt=""
                />
              </button>
            </a>
            <a
              data-aos="flip-down"
              href="https://www.revolut.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <button className="md:w-[375px] w-full h-[100px] md:h-[130px] bg-[#000] flex justify-center items-center border-[3px] border-white/20 text-black bg-black flex items-center justify-center p-2 px-5 gap-5 md:h-[130px] h-[100px] rounded cursor-pointer md:hover:scale-105 transition-all ease-in-out">
                <img
                  className="w-[290px] h-[auto] md:h-[70px]"
                  src="https://www.ponke.xyz/img/exchanges/bitmart.svg"
                  alt=""
                />
              </button>
            </a>
            <a
              data-aos="flip-right"
              href="https://www.revolut.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <button className="md:w-[375px] w-full h-[100px] md:h-[130px] bg-[#000] flex justify-center items-center border-[3px] border-white/20 text-black bg-black flex items-center justify-center p-2 px-5 gap-5 md:h-[130px] h-[100px] rounded cursor-pointer md:hover:scale-105 transition-all ease-in-out">
                <img
                  className="w-[290px] h-[auto] md:h-[70px]"
                  src="https://www.ponke.xyz/img/exchanges/lbank.svg"
                  alt=""
                />
              </button>
            </a>
            <a
              data-aos="flip-left"
              href="https://www.revolut.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <button className="md:w-[375px] w-full h-[100px] md:h-[130px] bg-[#000] flex justify-center items-center border-[3px] border-white/20 text-black bg-black flex items-center justify-center p-2 px-5 gap-5 md:h-[130px] h-[100px] rounded cursor-pointer md:hover:scale-105 transition-all ease-in-out">
                <img
                  className="w-[290px] h-[auto] md:h-[70px]"
                  src="https://www.ponke.xyz/img/exchanges/bitrue.png"
                  alt=""
                />
              </button>
            </a>
            <a
              data-aos="flip-up"
              href="https://www.revolut.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <button className="md:w-[375px] w-full h-[100px] md:h-[130px] bg-[#000] flex justify-center items-center border-[3px] border-white/20 text-black bg-black flex items-center justify-center p-2 px-5 gap-5 md:h-[130px] h-[100px] rounded cursor-pointer md:hover:scale-105 transition-all ease-in-out">
                <img
                  className="w-[290px] h-[auto] md:h-[70px]"
                  src="https://www.ponke.xyz/img/exchanges/mexc.svg"
                  alt=""
                />
              </button>
            </a>
            <a
              data-aos="flip-right"
              href="https://www.revolut.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <button className="md:w-[375px] w-full h-[100px] md:h-[130px] bg-[#000] flex justify-center items-center border-[3px] border-white/20 text-black bg-black flex items-center justify-center p-2 px-5 gap-5 md:h-[130px] h-[100px] rounded cursor-pointer md:hover:scale-105 transition-all ease-in-out">
                <img
                  className="w-[290px] h-[auto] md:h-[70px]"
                  src="https://www.ponke.xyz/img/exchanges/bitvavo.svg"
                  alt=""
                />
              </button>
            </a>
          </div>
          <h3
            data-aos="fade-up"
            className="text-center md:mt-24 mt-20 md:text-2xl text-xl mx-auto text-white md:max-w-[600px] max-w-[300px] pb2"
          >
            More exchange listings are on the way.
          </h3>
        </div>
      </section>
      <section className="w-full min-h-[auto] flex flex-col gap-[100px] justify-center items-center pb2 pb1 md:pt1">
        <div className="container container-xl flex flex-col gap-[100px] justify-center items-center pb2 pb1 pt1">
          <div class="w-full flex flex-col justify-center items-center text-center">
            <h1
              data-aos="fade-down"
              className="md:leading-normal md:text-[100px] text-[52px]  leading-[60px] font-pretty px-5"
            >
              PONKE UTILITIES
            </h1>
            <h3
              data-aos="fade-up"
              className="w-full text-center mb-5 md:text-3xl text-lg md:max-w-[600px] max-w-[340px] mx-auto md:leading-[45px] text-black"
            >
              Seamlessly Integrated and Community Powered.
            </h3>
          </div>
          <div className="w-full mx-auto md:pt-20 pt-10 md:px-20 px-5 flex flex-col justify-center items-center gap-[25px] font-[1000]">
            <div class="flex flex-col lg:flex-row md:gap-5 gap-3 w-[90%] md:w-[70%] h-[auto] md:h-[370px] relative">
              <div class="flex-1" data-aos="fade-up" data-aos-duration="1000">
                <div class="h-full" style={{ opacity: "1", transform: "none" }}>
                  <div class="bg-dark-grey border-[3px] border-black rounded-xl text-center text-white p-8 py-10 h-[300px] md:h-[370px] flex-1 w-full relative overflow-hidden bg-[#111] flex flex-col justify-center items-center gap-[30px]">
                    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform rotate-45 opacity-0 animate-shine z-[100]"></div>
                    <div class="flex justify-center mb-5">
                      <div class="w-[200px] md:h-[90px] h-[50px] relative">
                        <img
                          alt="ponkeswap"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          class="object-contain"
                          sizes="100vw"
                          src="https://www.ponke.xyz/_next/image?url=%2Fimg%2Fponkeswap1.png&w=1920&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: " 100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                    </div>
                    <p class="max-w-[500px] text-white mx-auto md:text-base text-sm">
                      PonkeSwap is the next evolution for the PONKE community on
                      Solana. A decentralized exchange (DEX) that brings
                      together fun, rewards, and exclusive perks for PONKE
                      holders.
                    </p>
                    <div class="flex gap-8 font-pretty mb-[-4px] md:text-[22px] text-[20px] justify-center mt-8 rotate-[-2deg]">
                      <a href="https://www.ponkeswap.xyz/" target="_blank">
                        <div class="w-[180px] h-[50px] bg-red md:border-[3px] border-2 border-black md:hover:scale-105 md:px-4 md:py-2 py-1 px-3 flex justify-center items-center gap-1 transition-all text-white">
                          <div class="mb-[-6px] flex">
                            <span class="">Ponkeswap</span>
                          </div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-arrow-right md:block hidden rotate-[-40deg] mt-[-1px] mr-[-4px]"
                          >
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-arrow-right md:hidden rotate-[-40deg]"
                          >
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex-1" data-aos="fade-up" data-aos-duration="1500">
                <div class="h-full" style={{ opacity: "1", transform: "none" }}>
                  <div class="bg-skin border-[3px] border-black rounded-xl text-center text-black p-8 py-10 h-[270px] md:h-full flex-1 w-full flex flex-col justify-center items-center gap-[30px]">
                    <div class="font-pretty md:text-3xl text-2xl text-black mb-2">
                      Robust Integrations
                    </div>
                    <p class="max-w-[500px] mx-auto md:text-base text-sm">
                      PONKE has established integrations with top exchanges,
                      wallets, and services in the crypto space, ensuring
                      seamless accessibility and utility for users across
                      various platforms.
                    </p>
                    <div class="flex gap-8 font-pretty mb-[-4px] md:text-[22px] text-[20px] justify-center mt-8 rotate-[-2deg]">
                      <a href="/integrations">
                        <div class="w-[200px] h-[50px] bg-red md:border-[3px] border-2 border-black md:hover:scale-105 md:px-4 md:py-2 py-1 px-3 flex items-center justify-center gap-1 transition-all text-white">
                          <div class="mb-[-6px] flex">
                            <span class="">INTEGRATIONS</span>
                          </div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-arrow-right md:block hidden rotate-[-40deg] mt-[-1px] mr-[-4px]"
                          >
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-arrow-right md:hidden rotate-[-40deg]"
                          >
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col lg:flex-row md:gap-5 gap-3 w-[90%] md:w-[70%] h-[auto] md:h-[250px] relative font-bold pb2">
              <div class="flex-1" data-aos="fade-up" data-aos-duration="2000">
                <div class="h-full" style={{ opacity: "1", transform: "none" }}>
                  <div class="bg-skin border-[3px] border-black rounded-xl text-center text-black p-8 py-10 md:h-[250px] flex-1 w-full h-[200px] flex flex-col justify-center items-center gap-[30px]">
                    <div class="font-pretty md:text-3xl text-2xl text-black mb-2">
                      Community-Driven Support
                    </div>
                    <p class="max-w-[500px] mx-auto md:text-base text-sm font-bold">
                      PONKE thrives on strong community backing, with continuous
                      support from both crypto enthusiasts and leading
                      platforms, driving its adoption and utility in the wider
                      crypto space.
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex-1" data-aos="fade-up" data-aos-duration="2500">
                <div class="h-full" style={{ opacity: "1", transform: "none" }}>
                  <div class="bg-skin border-[3px] border-black rounded-xl text-center text-black p-8 py-10 md:h-[250px] flex-1 w-full h-[200px] flex flex-col justify-center items-center gap-[30px]">
                    <div class="font-pretty md:text-3xl text-2xl text-black mb-2">
                      Expanding Ecosystem
                    </div>
                    <p class="max-w-[500px] mx-auto md:text-base text-sm font-bold">
                      PONKE's ecosystem continues to grow with partnerships
                      across CEXs, DEXs, and even travel platforms, enabling
                      users to leverage $PONKE for trading, asset management,
                      and global travel bookings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="w-full min-h-[auto] bg-[#111] border-b-4 border-b-black md:pb-32 pb-20 md:px-0 px-5 pb1 pt1 flex items-center justify-between">
        <div className="container container-xl flex items-center justify-between">
          <div class="w-full mx-auto relative md:pt-32 pt-20 ">
            <div class="h-full" style={{ opacity: "1", transform: "none" }}>
              <div class="md:text-[100px] text-[52px] text-center font-pretty">
                <h1
                  class="text-orange1 md:leading-normal leading-[60px]"
                  data-aos="fade-up"
                >
                  HOW TO BUY
                </h1>
              </div>
            </div>
            <div
              class="h-full"
              style={{ opacity: "1", transform: "none", marginBottom: "40px" }}
            >
              <div class="text-center mb-5 md:text-[40px] text-xl max-w-[600px] mx-auto text-white">
                <p class="md:leading-[45px]" data-aos="fade-down">
                  Follow these easy steps to become a Ponke holder.
                </p>
              </div>
            </div>
            <div class="w-full md:px-12 xl:px-0 flex md:flex-row flex-col justify-center items-center md:gap-[0] gap-[20px]">
              <div class="grid md:grid-cols-2 grid-cols-1 gap-5 md:mt-20 mt-16 text-white px-3 md:px-0 w-[95%] md:w-[45%]">
                <div
                  class="md:h-[230px] p-24 bg-black border-2 border-white/20"
                  data-aos="zoom-in-down"
                  data-aos-duration="800"
                >
                  <div class="text-white font-pretty md:text-[35px] text-2xl mb-2">
                    <strong class="text-yellow">1.</strong> Create a wallet with
                    Phantom
                  </div>
                  <p class="text-white/80 cursor-pointer md:text-[18px] text-sm">
                    Visit{" "}
                    <a
                      class="underline text-red"
                      href="https://phantom.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      phantom.app
                    </a>{" "}
                    and follow the simple steps to create a new account with the
                    Phantom app or browser extension.
                  </p>
                </div>
                <div
                  class="md:h-[230px] p-24 bg-black border-2 border-white/20"
                  data-aos="zoom-in-down"
                  data-aos-duration="1100"
                >
                  <div class="text-white font-pretty md:text-[35px] text-2xl mb-2">
                    <strong class="text-yellow">2.</strong> Get some $SOL
                  </div>
                  <p class="text-white/80 md:text-[18px] text-sm">
                    Tap the BUY button in the app to purchase Solana, or deposit
                    $SOL to your Phantom wallet from the crypto exchange of your
                    choice.
                  </p>
                </div>
                <div
                  class="md:h-[230px] p-24 bg-black border-2 border-white/20"
                  data-aos="zoom-in-down"
                  data-aos-duration="1500"
                >
                  <div class="text-white font-pretty md:text-[35px] text-2xl mb-2">
                    <strong class="text-yellow">3.</strong> Swap $SOL for $PONKE
                  </div>
                  <p class="text-white/80 md:text-[18px] text-sm">
                    Tap the SWAP icon in your Phantom wallet and paste the
                    $PONKE token address. Swap your $SOL for $PONKE.
                  </p>
                </div>
                <div
                  class="md:h-[230px] p-24 bg-black border-2 border-white/20"
                  data-aos="zoom-in-down"
                  data-aos-duration="1800"
                >
                  <div class="text-white font-pretty md:text-[35px] text-2xl mb-2">
                    <strong class="text-yellow">4.</strong> You are now a $PONKE
                    holder!
                  </div>
                  <p class="text-white/80 md:text-[18px] text-sm">
                    Welcome to the #Ponke Army!
                  </p>
                </div>
              </div>
              <div
                class="flex justify-center mt-5 mb-[-50px] md:w-[40%]"
                data-aos="flip-right"
                data-aos-duration="1200"
              >
                <img
                  src="https://www.ponke.xyz/img/teacher.png"
                  class="lg:w-[500px] w-[240px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="border-b-4 border-b-black md:pb-32 md:px-0 bg-orange1">
        <div className="container container-xl">
          <div class="w-full pt1 pb1 mx-auto relative md:pt-24 pt-20">
            <div class="h-full" style={{ opacity: "1", transform: "none" }}>
              <div class="md:text-[100px] text-[52px] text-center px-5 mb1">
                <h1
                  class="text-black md:leading-normal leading-[44px] font-pretty"
                  data-aos="fade-down"
                >
                  PUT ON A HELMET!
                </h1>
              </div>
            </div>
            <div class="md:hidden block pb-5">
              <div class="h-full">
                <div class="text-center mt-4 md:text-3xl text-xl max-w-[700px] mx-auto text-black flex flex-col gap-[30px]">
                  <p class="mx-auto max-w-[300px]">
                    Join the <strong class="text-green">PONKE army</strong> by
                    putting on a helmet using our tool.
                  </p>
                  <img
                    alt="helmet"
                    loading="lazy"
                    decoding="async"
                    width="140"
                    height="140"
                    class="mx-auto mt-8 mb-[-10px] wiggle"
                    style={{ color: "transparent" }}
                    src="https://www.ponke.xyz/images/helmet.svg"
                  />
                  <a href="/helmet">
                    <button class="w-[240px] h-[60px] flex justify-center items-center font-pretty text-white md:text-3xl text-2xl border-4 rounded-0 border-black shadow md:px-8 px-6 md:py-2 md:pt-4 py-1 pt-3 tracking-wide transition-all md:mt-20 mt-10 rotate-[2deg] bg-green flex mx-auto gap-1 opacity-100 md:hover:scale-105">
                      Helmet Tool
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-arrow-right rotate-[-40deg] mt-[-4px]"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div class="md:mt-32 mt-14 flex md:flex-row flex-col items-center justify-center pt1 pb1">
              <div class="relative md:w-[450px] h-auto w-[90%] md:h-[600px]">
                <img
                  data-aos="flip-down"
                  class="object-contain md:h-full md:border-4 border-t-4 border-black shadow-md md:rotate-[-5deg]"
                  src="https://www.ponke.xyz/img/revolution.gif"
                  alt="head"
                />
              </div>
              <div class="md:block hidden mt-[-100px]">
                <div
                  class="h-full flex flex-col gap-[50px]"
                  style={{ opacity: "1", transform: "none" }}
                >
                  <img
                    data-aos="zoom-in"
                    alt="helmet"
                    loading="lazy"
                    width="200"
                    height="200"
                    decoding="async"
                    data-nimg="1"
                    class="mx-auto wiggle"
                    style={{ color: "transparent" }}
                    src="https://www.ponke.xyz/images/helmet.svg"
                  />
                  <div class="text-center mt-10 md:text-3xl text-xl max-w-[700px] mx-auto text-black flex flex-col gap-[50px] ">
                    <p
                      class="md:max-w-[500px] max-w-[300px]"
                      data-aos="fade-down"
                    >
                      Join the <strong class="text-green">PONKE army</strong> by
                      putting on a helmet using our tool.
                    </p>
                    <a href="/helmet">
                      <button
                        data-aos="fade-up"
                        class="font-pretty text-white md:text-3xl text-2xl border-4 rounded-0 border-black shadow md:px-8 px-6 md:py-2 md:pt-4 py-1 pt-3 tracking-wide transition-all md:mt-20 mt-10 rotate-[2deg] bg-green opacity-100 md:hover:scale-105"
                      >
                        Helmet Tool
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="border-b-4 border-b-black md:pb-32 pb-20 md:px-0 px-5 bg-[#111] pt1">
        <div className="container container-xl mb200">
          <div class="w-full mx-auto relative md:pt-24 pt-20 flex flex-col items-center justify-center gap-[80px] ">
            <div class="h-full" style={{ opacity: "1", transform: "none" }}>
              <div class="md:text-[100px] text-[52px] text-center">
                <h1
                  class="text-orange1 md:leading-normal leading-[60px] font-pretty"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  TOKENOMICS
                </h1>
              </div>
              <div class="text-center mb-5 md:text-3xl text-lg max-w-[340px] md:mt-0 mt-2 md:max-w-[700px] mx-auto text-white">
                <p data-aos="fade-down" data-aos-duration="14000">
                  PONKE made 555 Million tokens but he's a
                  <strong class="text-red">greedy son of a bitch</strong> and
                  wants to keep them all to himself.
                </p>
              </div>
            </div>
            <div
              class="w-full h-full"
              style={{ opacity: "1", transform: "none" }}
            >
              <div class="md:p-20 p-5 pt-10 w-full flex md:flex-row flex-col gap-10 justify-center items-center">
                <div class="relative md:w-[670px] w-full overflow-hidden">
                  <div class="absolute top-0 left-0 bottom-0 bg-transparent blink-bg right-0 z-10"></div>
                  <img
                    class="object-contain w-full"
                    src="https://www.ponke.xyz/img/trading.jpg"
                    alt="trading"
                    style={{
                      width: "100%",
                      border: "4px solid rgb(255 176 0)",
                    }}
                  />
                </div>
                <div class="flex flex-col items-center">
                  <div class="relative md:w-[400px] w-[200px] h-[200px] md:top-[-70px] md:block hidden">
                    <img
                      data-aos="flip-right"
                      data-aos-duration="1500"
                      alt="trading"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      class="object-contain strobe"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        color: "transparent",
                      }}
                      sizes="100vw"
                      src="https://www.ponke.xyz/_next/image?url=%2Fimg%2Fatwork-white.png&w=3840&q=75"
                    />
                  </div>
                  <div
                    class="max-w-[400px] h-full"
                    style={{ opacity: "1", transform: "none" }}
                  >
                    <div class="flex flex-col md:gap-5 gap-3 relative z-20">
                      <div
                        class="h-full"
                        style={{ opacity: "1", transform: "none" }}
                      >
                        <div class="flex-1 f p-5 border-4 border-yellow bg-orange1 text-center">
                          <div class="md:text-4xl text-xl font-pretty md:mb-[-14px] mb-[-10px]">
                            TOTAL SUPPLY
                          </div>
                          <div class="md:text-xl md:mt-3 mt-2 break-all">
                            555,555,555 $PONKE
                          </div>
                        </div>
                      </div>
                      <div
                        class="h-full"
                        style={{ opacity: "1", transform: "none" }}
                      >
                        <div class="flex-1 p-5 border-4 border-yellow bg-orange1 text-center">
                          <div class="md:text-4xl text-xl font-pretty md:mb-[-14px] mb-[-10px]">
                            TOKEN ADDRESS
                          </div>
                          <div class="md:text-lg text-xs md:mt-3 mt-2 break-all">
                            5z3EqYQo9HiCEs3R84RCDMu2n7anpDMxRhdK8PSWmrRC
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="md:absolute md:bottom-[-60px] md:mt-0 mt-10 md:left-[500px] z-10"
                  style={{ bottom: "-100px" }}
                >
                  <a
                    href="https://www.ponkeswap.xyz/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <button class="w-[250px] md:w-[300px] h-[60px] font-pretty md:text-3xl text-2xl border-4 rounded-0 border-black shadow md:px-8 px-6 md:py-2 md:pt-4 py-1 pt-3 tracking-wide transition-all animate-bounce-fast bg-red text-white opacity-100 md:hover:scale-105">
                      BUY PONKE HERE
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="h-[auto] border-b-4 border-black relative bg-pov">
        <div className="container container-xl">
          <div class="bg-center bg-cover bg-no-repeat h-full md:min-h-[1200px] flex-1">
            <div class="w-full mx-auto relative pt-[300px]">
              <div class="bg-orange1 md:hidden block text-2xl absolute px-10 md:top-40 top-20 md:left-0 left-1/2 translate-x-[-50%] md:translate-x-0 whitespace-nowrap rotate-[-12deg] text-black bg-yellow border-4 border-black text-center max-w-[900px] mx-auto">
                <h1>PONKE TRADING POV</h1>
              </div>
              <div
                key={animateKey}
                data-aos="flip-left"
                data-aos-duration="1500"
                class="w-[517px] md:block hidden text-[40px] absolute px-10 top-40 left-[80px] rotate-[-12deg] text-black bg-orange1 border-4 border-black text-center max-w-[900px] mx-auto fomnt"
              >
                <h1>PONKE TRADING POV</h1>
              </div>
              <div class="text-center mt-10 text-2xl max-w-[600px] mx-auto"></div>
              <div class="p-20 w-full"></div>
            </div>
          </div>
        </div>
      </section>
      <div class="bg-yellow relative">
        <div className="container container-xl">
          <div class="absolute bottom-5 right-5 text-black text-sm">
            <a
              href="https://medium.com/@ponkesol/ponke-meme-coin-on-solana-whitepaper-d1fef2ebf1d8"
              target="_blank"
              rel="noreferrer noopener"
              class="font-proper font-bold underline"
            >
              WHITEPAPER
            </a>
          </div>
          <div class="min-h-[500px] md:pt-20 pt-12 mx-auto max-w-1500 flex flex-col gap-[60px]">
            <div class="h-full" style={{ opacity: "1", transform: "none" }}>
              <div class="md:text-[120px] text-[50px] text-center">
                <h1 class="text-black font-pretty" data-aos="zoom-in">
                  SOCIALS
                </h1>
                <div
                  class="text-black md:text-3xl text-xl"
                  data-aos="zoom-in"
                  data-aos-duration="1300"
                >
                  Join the PONKE ARMY
                </div>
              </div>
            </div>
            <div class="flex md:gap-6 gap-3 justify-center md:pt-20 pt-10 z-[100] relative">
              <div class="relative md:size-16 w-12 h-12">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://twitter.com/PONKESOL"
                >
                  <img
                    data-aos="fade-up"
                    data-aos-duration="800"
                    alt="head"
                    fetchpriority="high"
                    decoding="async"
                    data-nimg="fill"
                    class="bg-black rotate-[-5deg] md:hover:scale-105"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      color: "transparent",
                    }}
                    sizes="100vw"
                    src="https://www.ponke.xyz/_next/image?url=%2Fimg%2Fx.png&w=3840&q=75"
                  />
                </a>
              </div>
              <div class="relative md:size-16 w-12 h-12 md:hover:scale-105">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://t.me/ponkesol"
                >
                  <img
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    alt="head"
                    fetchpriority="high"
                    decoding="async"
                    data-nimg="fill"
                    class="bg-black rotate-[5deg]"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      color: "transparent",
                    }}
                    sizes="100vw"
                    src="https://www.ponke.xyz/_next/image?url=%2Fimg%2Ftelegram.png&w=3840&q=75"
                  />
                </a>
              </div>
              <div class="relative md:size-16 w-12 h-12 md:hover:scale-105">
                <a
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  href="https://twitter.com/PONKESOL"
                  className="w-full h-full p-[10px] bg-[#000] flex justify-center items-center md:hover:scale-105 rotate-[-5deg] pl-[30px]"
                >
                  <div class="w-[52px] h-[52px] bg-[#000] md:size-12 size-10 rotate-[5deg] flex justify-center items-center">
                    <img
                      alt="head"
                      fetchpriority="high"
                      decoding="async"
                      data-nimg="fill"
                      class="bg-black p-[10px]"
                      style={{
                        position: "absolute",
                        height: "80%",
                        width: "80%",
                        left: "5px",
                        top: "5px",
                        right: 0,
                        bottom: 0,
                        color: "transparent",
                      }}
                      src="https://www.ponke.xyz/img/instagram.svg"
                    />
                  </div>
                </a>
              </div>
              <div class="relative md:size-16 w-12 h-12 md:hover:scale-105">
                <a
                  data-aos="fade-up"
                  data-aos-duration="800"
                  href="https://twitter.com/PONKESOL"
                  className="w-full h-full p-[10px] bg-[#000] flex justify-center items-center md:hover:scale-105 rotate-[5deg] pl-[30px]"
                >
                  <div class="w-[52px] h-[52px] bg-[#000] md:size-12 size-10 rotate-[5deg] flex justify-center items-center">
                    <img

                      alt="head"
                      fetchpriority="high"
                      decoding="async"
                      data-nimg="fill"
                      class="bg-black p-[10px]"
                      style={{
                        position: "absolute",
                        height: "80%",
                        width: "80%",
                        left: "5px",
                        top: "5px",
                        right: 0,
                        bottom: 0,
                        color: "transparent",
                      }}
                      src="https://www.ponke.xyz/images/tiktok.svg"
                    />
                  </div>
                </a>
              </div>
            </div>
            <div class="flex md:flex-row flex-col-reverse justify-center items-center md:mt-[-140px] mt-20">
              <div>
                <div class="relative md:w-[700px] md:h-[700px] w-[250px] h-[250px]">
                  <img
                    alt="head"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    class="object-contain"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      color: "transparent",
                    }}
                    sizes="100vw"
                    src="https://www.ponke.xyz/_next/image?url=%2Fimg%2Fponke.gif&w=3840&q=75"
                  />
                </div>
              </div>
              <div class="flex flex-col justify-end md:h-[300px] md:mt-36">
                <a
                  href="https://www.ponkeswap.xyz/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <button class="font-pretty text-white md:text-3xl text-2xl bg-red border-4 rounded-0 border-black rotate-[5deg] shadow md:px-8 px-6 md:py-2 md:pt-4 py-1 pt-3 tracking-wide transition-all strobe md:rotate-[-10deg] opacity-100 md:hover:scale-105">
                    CLICK TO APE IN
                  </button>
                </a>
                <div class="relative md:w-[300px] md:h-[90px] mt-10 z-20 md:block hidden">
                  <img
                    alt="logo"
                    fetchpriority="high"
                    decoding="async"
                    data-nimg="fill"
                    class="object-contain"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      color: "transparent",
                    }}
                    sizes="100vw"
                    src="https://www.ponke.xyz/_next/image?url=%2Fimg%2Flogo-text-black.png&w=3840&q=75"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
