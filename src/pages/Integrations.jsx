import React, { useState } from "react";

function Integrations() {
  const [menu, setMenu] = useState(0);
  return (
    <div class="min-h-screen gradient px-5 overflow-x-hidden pb-32">
      <div class="fixed w-full md:h-[80px] left-0 right-0 top-0 z-[200] transition-all ease-in-out md:px-14 flex items-center gradient md:py-8 py-5 px-5">
        <a href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-arrow-left absolute left-5 md:top-5 top-4 size-[25px] md:size-[34px]"
          >
            <path d="m12 19-7-7 7-7"></path>
            <path d="M19 12H5"></path>
          </svg>
        </a>
        <div class="flex justify-center w-full">
          <a href="/">
            <div class="relative z-20 md:ml-[-20px] ml-[-5px] transition-all ease-in-out md:w-[170px] md:h-12 w-[140px] h-14">
              <img
                alt="logo"
                fetchpriority="high"
                decoding="async"
                data-nimg="fill"
                class="object-contain"
                src="https://www.ponke.xyz/images/logo-nav.svg"
                style={{
                  position: "absolute",
                  height: " 100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent",
                }}
              />
            </div>
          </a>
        </div>
      </div>
      <div class="min-h-[120vh] md:flex items-center flex-col gap-[30px] font-proper md:pt-24 pt-24 pt1 pb1">
        <div
          class="md:text-[85px] text-[40px] text-brown-dark font-bold text-center"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          INTEGRATIONS
        </div>
        <p
          class="max-w-[670px] text-center md:text-xl md:mt-[-14px] text-brown-dark"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Discover the power of $PONKE. Trade on top exchanges, manage your
          assets with popular wallets, and even book travel. See where your
          $PONKE can take you!
        </p>
        <div class="mt-8 px-2 md:px-0">
          <div className="flex flex-col gap-[30px]">
            <div class="flex md:gap-5 gap-4 flex-wrap justify-center">
              <button
                onClick={() => setMenu(0)}
                className={`bg-${menu == 0 ? "red" : ""} text-${
                  menu == 0 ? "white1" : "black1"
                } md:text-xl px-2 pt-[1px] cursor-pointer transition-all ease-in-out md:hover:text-white rounded font-medium text-white`}
              >
                FEATURED
              </button>
              <button
                onClick={() => setMenu(1)}
                className={`bg-${menu == 1 ? "red" : ""} text-${
                  menu == 1 ? "white1" : "black1"
                } md:text-xl px-2 pt-[1px] cursor-pointer transition-all ease-in-out md:hover:text-white rounded font-medium bg-transparent`}
              >
                CEX
              </button>
              <button
                onClick={() => setMenu(2)}
                className={`bg-${menu == 2 ? "red" : ""} text-${
                  menu == 2 ? "white1" : "black1"
                } md:text-xl px-2 pt-[1px] cursor-pointer transition-all ease-in-out md:hover:text-white rounded font-medium text-white`}
              >
                DEX
              </button>
              <button
                onClick={() => setMenu(3)}
                className={`bg-${menu == 3 ? "red" : ""} text-${
                  menu == 3 ? "white1" : "black1"
                } md:text-xl px-2 pt-[1px] cursor-pointer transition-all ease-in-out md:hover:text-white rounded font-medium bg-transparent`}
              >
                WALLET
              </button>
              <button
                onClick={() => setMenu(4)}
                className={`bg-${menu == 4 ? "red" : ""} text-${
                  menu == 4 ? "white1" : "black1"
                } md:text-xl px-2 pt-[1px] cursor-pointer transition-all ease-in-out md:hover:text-white rounded font-medium bg-transparent`}
              >
                TRAVEL
              </button>
              <button
                onClick={() => setMenu(5)}
                className={`bg-${menu == 5 ? "red" : ""} text-${
                  menu == 5 ? "white1" : "black1"
                } md:text-xl px-2 pt-[1px] cursor-pointer transition-all ease-in-out md:hover:text-white rounded font-medium bg-transparent`}
              >
                MISC
              </button>
            </div>
            {menu == 0 ? (
              <div
                class="grid md:grid-cols-3 grid-cols-1 max-w-[1200px] md:gap-5 gap-3 mt-8"
                data-aos="flip-up"
              >
                <a
                  href="https://www.ponkeswap.xyz/"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="cursor-pointer md:hover:scale-[1.02] transition-all ease-in-out"
                >
                  <div class="p5 bg-skin text-black border-[3px] border-brown-dark/50 rounded-xl min-h-[100px] flex-1 w-full h-[145px]">
                    <div class="flex gap-4 ">
                      <img
                        src="https://www.ponke.xyz/images/integrations/ponkeswap-square.png"
                        class="object-contain h-[55px] border-2 border-black rounded-full aspect-square"
                        alt="PonkeSwap"
                      />
                      <div>
                        <div class="uppercase md:text-xl text-lg font-bold font-mono">
                          PonkeSwap
                        </div>
                        <p class="text-wrap text-[16px] break-words leading-tight  font-mono">
                          A decentralized exchange (DEX) that brings together
                          fun, rewards, and exclusive perks for PONKE holders.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://wallet.coinbase.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="cursor-pointer md:hover:scale-[1.02] transition-all ease-in-out"
                >
                  <div class="p5 bg-skin text-black border-[3px] border-brown-dark/50 rounded-xl min-h-[100px] flex-1 w-full h-[145px]">
                    <div class="flex gap-4">
                      <img
                        src="https://www.ponke.xyz/images/integrations/coinbasewallet.png"
                        class="object-contain h-[55px] border-2 border-black rounded-full aspect-square"
                        alt="Coinbase Wallet"
                      />
                      <div>
                        <div class="uppercase md:text-xl text-lg font-bold font-mono">
                          Coinbase Wallet
                        </div>
                        <p class="text-wrap text-[16px] break-words leading-tight font-mono">
                          Store &amp; Swap $PONKE with Coinbase Wallet
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://jup.ag/swap/SOL-PONKE"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="cursor-pointer md:hover:scale-[1.02] transition-all ease-in-out"
                >
                  <div class="p5 bg-skin text-black border-[3px] border-brown-dark/50 rounded-xl min-h-[100px] flex-1 w-full h-[145px]">
                    <div class="flex gap-4">
                      <img
                        src="https://www.ponke.xyz/images/integrations/jupiter.jpg"
                        class="object-contain h-[55px] border-2 border-black rounded-full aspect-square"
                        alt="Jupiter"
                      />
                      <div>
                        <div class="uppercase md:text-xl text-lg font-bold font-mono">
                          Jupiter
                        </div>
                        <p class="text-wrap text-[16px] break-words leading-tight font-mono">
                          Find the best rates for trading $PONKE on Jupiter,
                          Solana's top aggregator.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://www.revolut.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="cursor-pointer md:hover:scale-[1.02] transition-all ease-in-out"
                >
                  <div class="p5 bg-skin text-black border-[3px] border-brown-dark/50 rounded-xl min-h-[100px] flex-1 w-full h-[145px]">
                    <div class="flex gap-4">
                      <img
                        src="https://www.ponke.xyz/images/integrations/revolut.png"
                        class="object-contain h-[55px] border-2 border-black rounded-full aspect-square"
                        alt="Revolut"
                      />
                      <div>
                        <div class="uppercase md:text-xl text-lg font-bold font-mono">
                          Revolut
                        </div>
                        <p class="text-wrap text-[16px] break-words leading-tight font-mono">
                          Buy and sell $PONKE Revolut, Europe's leading neobank
                          known for its innovative financial offerings.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://www.bybit.com/en/trade/spot/PONKE/USDT"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="cursor-pointer md:hover:scale-[1.02] transition-all ease-in-out"
                >
                  <div class="p5 bg-skin text-black border-[3px] border-brown-dark/50 rounded-xl min-h-[100px] flex-1 w-full h-[145px]">
                    <div class="flex gap-4">
                      <img
                        src="https://www.ponke.xyz/images/integrations/bybit.png"
                        class="object-contain h-[55px] border-2 border-black rounded-full aspect-square"
                        alt="Bybit"
                      />
                      <div>
                        <div class="uppercase md:text-xl text-lg font-bold font-mono">
                          Bybit
                        </div>
                        <p class="text-wrap text-[16px] break-words leading-tight font-mono">
                          Trade $PONKE on Bybit, a top global exchange known for
                          its ultra-fast matching engine and 24/7 support.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://crypto.com/exchange/trade/PONKE_USD"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="cursor-pointer md:hover:scale-[1.02] transition-all ease-in-out"
                >
                  <div class="p5 bg-skin text-black border-[3px] border-brown-dark/50 rounded-xl min-h-[100px] flex-1 w-full h-[145px]">
                    <div class="flex gap-4">
                      <img
                        src="https://www.ponke.xyz/images/integrations/cdc.png"
                        class="object-contain h-[55px] border-2 border-black rounded-full aspect-square"
                        alt="crypto.com"
                      />
                      <div>
                        <div class="uppercase md:text-xl text-lg font-bold font-mono">
                          crypto.com
                        </div>
                        <p class="text-wrap text-[16px] break-words leading-tight font-mono">
                          Buy and sell $PONKE on Bithumb.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://www.bybit.com/en/trade/spot/PONKE/USDT"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="cursor-pointer md:hover:scale-[1.02] transition-all ease-in-out"
                >
                  <div class="p5 bg-skin text-black border-[3px] border-brown-dark/50 rounded-xl min-h-[100px] flex-1 w-full h-[145px]">
                    <div class="flex gap-4">
                      <img
                        src="https://www.ponke.xyz/images/integrations/kraken.jpg"
                        class="object-contain h-[55px] border-2 border-black rounded-full aspect-square"
                        alt="Kraken"
                      />
                      <div>
                        <div class="uppercase md:text-xl text-lg font-bold font-mono">
                          Kraken
                        </div>
                        <p class="text-wrap text-[16px] break-words leading-tight font-mono">
                          Trade $PONKE on Kraken, a top global exchange.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://phantom.app/"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="cursor-pointer md:hover:scale-[1.02] transition-all ease-in-out"
                >
                  <div class="p5 bg-skin text-black border-[3px] border-brown-dark/50 rounded-xl min-h-[100px] flex-1 w-full h-[145px]">
                    <div class="flex gap-4">
                      <img
                        src="https://www.ponke.xyz/images/integrations/phantom.jpg"
                        class="object-contain h-[55px] border-2 border-black rounded-full aspect-square"
                        alt="Phantom"
                      />
                      <div>
                        <div class="uppercase md:text-xl text-lg font-bold font-mono">
                          Phantom
                        </div>
                        <p class="text-wrap text-[16px] break-words leading-tight font-mono">
                          Manage and trade $PONKE seamlessly with Phantom, the
                          most popular Solana wallet.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://www.gmci.co/"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="cursor-pointer md:hover:scale-[1.02] transition-all ease-in-out"
                >
                  <div class="p5 bg-skin text-black border-[3px] border-brown-dark/50 rounded-xl min-h-[100px] flex-1 w-full h-[145px]">
                    <div class="flex gap-4">
                      <img
                        src="https://www.ponke.xyz/images/integrations/gmci.jpg"
                        class="object-contain h-[55px] border-2 border-black rounded-full aspect-square"
                        alt="GMCI Meme Index"
                      />
                      <div>
                        <div class="uppercase md:text-xl text-lg font-bold font-mono">
                          GMCI Meme Index
                        </div>
                        <p class="text-wrap text-[16px] break-words leading-tight font-mono">
                          The 'GMCI Meme' contains the leading meme coins by
                          market capitalization.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://www.travala.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="cursor-pointer md:hover:scale-[1.02] transition-all ease-in-out"
                >
                  <div class="p5 bg-skin text-black border-[3px] border-brown-dark/50 rounded-xl min-h-[100px] flex-1 w-full h-[145px]">
                    <div class="flex gap-4">
                      <img
                        src="https://www.ponke.xyz/images/integrations/travala.jpg"
                        class="object-contain h-[55px] border-2 border-black rounded-full aspect-square"
                        alt="Travala"
                      />
                      <div>
                        <div class="uppercase md:text-xl text-lg font-bold font-mono">
                          Travala
                        </div>
                        <p class="text-wrap text-[16px] break-words leading-tight font-mono">
                          Book millions of hotels &amp; flights globally &amp;
                          pay with $PONKE.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://travelswap.xyz/"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="cursor-pointer md:hover:scale-[1.02] transition-all ease-in-out"
                >
                  <div class="p5 bg-skin text-black border-[3px] border-brown-dark/50 rounded-xl min-h-[100px] flex-1 w-full h-[145px]">
                    <div class="flex gap-4">
                      <img
                        src="https://www.ponke.xyz/images/integrations/travelswap.jpg"
                        class="object-contain h-[55px] border-2 border-black rounded-full aspect-square"
                        alt="Travel Swap"
                      />
                      <div>
                        <div class="uppercase md:text-xl text-lg font-bold font-mono">
                          Travel Swap
                        </div>
                        <p class="text-wrap text-[16px] break-words leading-tight font-mono">
                          Book hotels, and vacation stays on TravelSwap with
                          $PONKE.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://www.bybit.com/en/trade/spot/PONKE/USDT"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="cursor-pointer md:hover:scale-[1.02] transition-all ease-in-out"
                >
                  <div class="p5 bg-skin text-black border-[3px] border-brown-dark/50 rounded-xl min-h-[100px] flex-1 w-full h-[145px]">
                    <div class="flex gap-4">
                      <img
                        src="https://www.ponke.xyz/images/integrations/bybit.png"
                        class="object-contain h-[55px] border-2 border-black rounded-full aspect-square"
                        alt="Bybit"
                      />
                      <div>
                        <div class="uppercase md:text-xl text-lg font-bold font-mono">
                          Bybit
                        </div>
                        <p class="text-wrap text-[16px] break-words leading-tight font-mono">
                          Trade $PONKE on Bybit, a top global exchange known for
                          its ultra-fast matching engine and 24/7 support.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ) : menu == 1 ? (
              <div
                class="grid md:grid-cols-3 grid-cols-1 max-w-[1200px] md:gap-5 gap-3 mt-8"
                data-aos="flip-up"
              >
                <a
                  href="https://www.ponkeswap.xyz/"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="cursor-pointer md:hover:scale-[1.02] transition-all ease-in-out"
                >
                  <div class="p5 bg-skin text-black border-[3px] border-brown-dark/50 rounded-xl min-h-[100px] flex-1 w-full h-[145px]">
                    <div class="flex gap-4 ">
                      <img
                        src="https://www.ponke.xyz/images/integrations/ponkeswap-square.png"
                        class="object-contain h-[55px] border-2 border-black rounded-full aspect-square"
                        alt="PonkeSwap"
                      />
                      <div>
                        <div class="uppercase md:text-xl text-lg font-bold font-mono">
                          PonkeSwap
                        </div>
                        <p class="text-wrap text-[16px] break-words leading-tight  font-mono">
                          A decentralized exchange (DEX) that brings together
                          fun, rewards, and exclusive perks for PONKE holders.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://wallet.coinbase.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="cursor-pointer md:hover:scale-[1.02] transition-all ease-in-out"
                >
                  <div class="p5 bg-skin text-black border-[3px] border-brown-dark/50 rounded-xl min-h-[100px] flex-1 w-full h-[145px]">
                    <div class="flex gap-4">
                      <img
                        src="https://www.ponke.xyz/images/integrations/coinbasewallet.png"
                        class="object-contain h-[55px] border-2 border-black rounded-full aspect-square"
                        alt="Coinbase Wallet"
                      />
                      <div>
                        <div class="uppercase md:text-xl text-lg font-bold font-mono">
                          Coinbase Wallet
                        </div>
                        <p class="text-wrap text-[16px] break-words leading-tight font-mono">
                          Store &amp; Swap $PONKE with Coinbase Wallet
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://jup.ag/swap/SOL-PONKE"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="cursor-pointer md:hover:scale-[1.02] transition-all ease-in-out"
                >
                  <div class="p5 bg-skin text-black border-[3px] border-brown-dark/50 rounded-xl min-h-[100px] flex-1 w-full h-[145px]">
                    <div class="flex gap-4">
                      <img
                        src="https://www.ponke.xyz/images/integrations/jupiter.jpg"
                        class="object-contain h-[55px] border-2 border-black rounded-full aspect-square"
                        alt="Jupiter"
                      />
                      <div>
                        <div class="uppercase md:text-xl text-lg font-bold font-mono">
                          Jupiter
                        </div>
                        <p class="text-wrap text-[16px] break-words leading-tight font-mono">
                          Find the best rates for trading $PONKE on Jupiter,
                          Solana's top aggregator.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://www.revolut.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="cursor-pointer md:hover:scale-[1.02] transition-all ease-in-out"
                >
                  <div class="p5 bg-skin text-black border-[3px] border-brown-dark/50 rounded-xl min-h-[100px] flex-1 w-full h-[145px]">
                    <div class="flex gap-4">
                      <img
                        src="https://www.ponke.xyz/images/integrations/revolut.png"
                        class="object-contain h-[55px] border-2 border-black rounded-full aspect-square"
                        alt="Revolut"
                      />
                      <div>
                        <div class="uppercase md:text-xl text-lg font-bold font-mono">
                          Revolut
                        </div>
                        <p class="text-wrap text-[16px] break-words leading-tight font-mono">
                          Buy and sell $PONKE Revolut, Europe's leading neobank
                          known for its innovative financial offerings.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://www.bybit.com/en/trade/spot/PONKE/USDT"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="cursor-pointer md:hover:scale-[1.02] transition-all ease-in-out"
                >
                  <div class="p5 bg-skin text-black border-[3px] border-brown-dark/50 rounded-xl min-h-[100px] flex-1 w-full h-[145px]">
                    <div class="flex gap-4">
                      <img
                        src="https://www.ponke.xyz/images/integrations/bybit.png"
                        class="object-contain h-[55px] border-2 border-black rounded-full aspect-square"
                        alt="Bybit"
                      />
                      <div>
                        <div class="uppercase md:text-xl text-lg font-bold font-mono">
                          Bybit
                        </div>
                        <p class="text-wrap text-[16px] break-words leading-tight font-mono">
                          Trade $PONKE on Bybit, a top global exchange known for
                          its ultra-fast matching engine and 24/7 support.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://crypto.com/exchange/trade/PONKE_USD"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="cursor-pointer md:hover:scale-[1.02] transition-all ease-in-out"
                >
                  <div class="p5 bg-skin text-black border-[3px] border-brown-dark/50 rounded-xl min-h-[100px] flex-1 w-full h-[145px]">
                    <div class="flex gap-4">
                      <img
                        src="https://www.ponke.xyz/images/integrations/cdc.png"
                        class="object-contain h-[55px] border-2 border-black rounded-full aspect-square"
                        alt="crypto.com"
                      />
                      <div>
                        <div class="uppercase md:text-xl text-lg font-bold font-mono">
                          crypto.com
                        </div>
                        <p class="text-wrap text-[16px] break-words leading-tight font-mono">
                          Buy and sell $PONKE on Bithumb.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://www.bybit.com/en/trade/spot/PONKE/USDT"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="cursor-pointer md:hover:scale-[1.02] transition-all ease-in-out"
                >
                  <div class="p5 bg-skin text-black border-[3px] border-brown-dark/50 rounded-xl min-h-[100px] flex-1 w-full h-[145px]">
                    <div class="flex gap-4">
                      <img
                        src="https://www.ponke.xyz/images/integrations/kraken.jpg"
                        class="object-contain h-[55px] border-2 border-black rounded-full aspect-square"
                        alt="Kraken"
                      />
                      <div>
                        <div class="uppercase md:text-xl text-lg font-bold font-mono">
                          Kraken
                        </div>
                        <p class="text-wrap text-[16px] break-words leading-tight font-mono">
                          Trade $PONKE on Kraken, a top global exchange.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://phantom.app/"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="cursor-pointer md:hover:scale-[1.02] transition-all ease-in-out"
                >
                  <div class="p5 bg-skin text-black border-[3px] border-brown-dark/50 rounded-xl min-h-[100px] flex-1 w-full h-[145px]">
                    <div class="flex gap-4">
                      <img
                        src="https://www.ponke.xyz/images/integrations/phantom.jpg"
                        class="object-contain h-[55px] border-2 border-black rounded-full aspect-square"
                        alt="Phantom"
                      />
                      <div>
                        <div class="uppercase md:text-xl text-lg font-bold font-mono">
                          Phantom
                        </div>
                        <p class="text-wrap text-[16px] break-words leading-tight font-mono">
                          Manage and trade $PONKE seamlessly with Phantom, the
                          most popular Solana wallet.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://www.gmci.co/"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="cursor-pointer md:hover:scale-[1.02] transition-all ease-in-out"
                >
                  <div class="p5 bg-skin text-black border-[3px] border-brown-dark/50 rounded-xl min-h-[100px] flex-1 w-full h-[145px]">
                    <div class="flex gap-4">
                      <img
                        src="https://www.ponke.xyz/images/integrations/gmci.jpg"
                        class="object-contain h-[55px] border-2 border-black rounded-full aspect-square"
                        alt="GMCI Meme Index"
                      />
                      <div>
                        <div class="uppercase md:text-xl text-lg font-bold font-mono">
                          GMCI Meme Index
                        </div>
                        <p class="text-wrap text-[16px] break-words leading-tight font-mono">
                          The 'GMCI Meme' contains the leading meme coins by
                          market capitalization.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://www.travala.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="cursor-pointer md:hover:scale-[1.02] transition-all ease-in-out"
                >
                  <div class="p5 bg-skin text-black border-[3px] border-brown-dark/50 rounded-xl min-h-[100px] flex-1 w-full h-[145px]">
                    <div class="flex gap-4">
                      <img
                        src="https://www.ponke.xyz/images/integrations/travala.jpg"
                        class="object-contain h-[55px] border-2 border-black rounded-full aspect-square"
                        alt="Travala"
                      />
                      <div>
                        <div class="uppercase md:text-xl text-lg font-bold font-mono">
                          Travala
                        </div>
                        <p class="text-wrap text-[16px] break-words leading-tight font-mono">
                          Book millions of hotels &amp; flights globally &amp;
                          pay with $PONKE.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://travelswap.xyz/"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="cursor-pointer md:hover:scale-[1.02] transition-all ease-in-out"
                >
                  <div class="p5 bg-skin text-black border-[3px] border-brown-dark/50 rounded-xl min-h-[100px] flex-1 w-full h-[145px]">
                    <div class="flex gap-4">
                      <img
                        src="https://www.ponke.xyz/images/integrations/travelswap.jpg"
                        class="object-contain h-[55px] border-2 border-black rounded-full aspect-square"
                        alt="Travel Swap"
                      />
                      <div>
                        <div class="uppercase md:text-xl text-lg font-bold font-mono">
                          Travel Swap
                        </div>
                        <p class="text-wrap text-[16px] break-words leading-tight font-mono">
                          Book hotels, and vacation stays on TravelSwap with
                          $PONKE.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://www.bybit.com/en/trade/spot/PONKE/USDT"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="cursor-pointer md:hover:scale-[1.02] transition-all ease-in-out"
                >
                  <div class="p5 bg-skin text-black border-[3px] border-brown-dark/50 rounded-xl min-h-[100px] flex-1 w-full h-[145px]">
                    <div class="flex gap-4">
                      <img
                        src="https://www.ponke.xyz/images/integrations/bybit.png"
                        class="object-contain h-[55px] border-2 border-black rounded-full aspect-square"
                        alt="Bybit"
                      />
                      <div>
                        <div class="uppercase md:text-xl text-lg font-bold font-mono">
                          Bybit
                        </div>
                        <p class="text-wrap text-[16px] break-words leading-tight font-mono">
                          Trade $PONKE on Bybit, a top global exchange known for
                          its ultra-fast matching engine and 24/7 support.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://www.ponkeswap.xyz/"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="cursor-pointer md:hover:scale-[1.02] transition-all ease-in-out"
                >
                  <div class="p5 bg-skin text-black border-[3px] border-brown-dark/50 rounded-xl min-h-[100px] flex-1 w-full h-[145px]">
                    <div class="flex gap-4 ">
                      <img
                        src="https://www.ponke.xyz/images/integrations/ponkeswap-square.png"
                        class="object-contain h-[55px] border-2 border-black rounded-full aspect-square"
                        alt="PonkeSwap"
                      />
                      <div>
                        <div class="uppercase md:text-xl text-lg font-bold font-mono">
                          PonkeSwap
                        </div>
                        <p class="text-wrap text-[16px] break-words leading-tight  font-mono">
                          A decentralized exchange (DEX) that brings together
                          fun, rewards, and exclusive perks for PONKE holders.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://wallet.coinbase.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="cursor-pointer md:hover:scale-[1.02] transition-all ease-in-out"
                >
                  <div class="p5 bg-skin text-black border-[3px] border-brown-dark/50 rounded-xl min-h-[100px] flex-1 w-full h-[145px]">
                    <div class="flex gap-4">
                      <img
                        src="https://www.ponke.xyz/images/integrations/coinbasewallet.png"
                        class="object-contain h-[55px] border-2 border-black rounded-full aspect-square"
                        alt="Coinbase Wallet"
                      />
                      <div>
                        <div class="uppercase md:text-xl text-lg font-bold font-mono">
                          Coinbase Wallet
                        </div>
                        <p class="text-wrap text-[16px] break-words leading-tight font-mono">
                          Store &amp; Swap $PONKE with Coinbase Wallet
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://jup.ag/swap/SOL-PONKE"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="cursor-pointer md:hover:scale-[1.02] transition-all ease-in-out"
                >
                  <div class="p5 bg-skin text-black border-[3px] border-brown-dark/50 rounded-xl min-h-[100px] flex-1 w-full h-[145px]">
                    <div class="flex gap-4">
                      <img
                        src="https://www.ponke.xyz/images/integrations/jupiter.jpg"
                        class="object-contain h-[55px] border-2 border-black rounded-full aspect-square"
                        alt="Jupiter"
                      />
                      <div>
                        <div class="uppercase md:text-xl text-lg font-bold font-mono">
                          Jupiter
                        </div>
                        <p class="text-wrap text-[16px] break-words leading-tight font-mono">
                          Find the best rates for trading $PONKE on Jupiter,
                          Solana's top aggregator.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://www.revolut.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="cursor-pointer md:hover:scale-[1.02] transition-all ease-in-out"
                >
                  <div class="p5 bg-skin text-black border-[3px] border-brown-dark/50 rounded-xl min-h-[100px] flex-1 w-full h-[145px]">
                    <div class="flex gap-4">
                      <img
                        src="https://www.ponke.xyz/images/integrations/revolut.png"
                        class="object-contain h-[55px] border-2 border-black rounded-full aspect-square"
                        alt="Revolut"
                      />
                      <div>
                        <div class="uppercase md:text-xl text-lg font-bold font-mono">
                          Revolut
                        </div>
                        <p class="text-wrap text-[16px] break-words leading-tight font-mono">
                          Buy and sell $PONKE Revolut, Europe's leading neobank
                          known for its innovative financial offerings.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://www.bybit.com/en/trade/spot/PONKE/USDT"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="cursor-pointer md:hover:scale-[1.02] transition-all ease-in-out"
                >
                  <div class="p5 bg-skin text-black border-[3px] border-brown-dark/50 rounded-xl min-h-[100px] flex-1 w-full h-[145px]">
                    <div class="flex gap-4">
                      <img
                        src="https://www.ponke.xyz/images/integrations/bybit.png"
                        class="object-contain h-[55px] border-2 border-black rounded-full aspect-square"
                        alt="Bybit"
                      />
                      <div>
                        <div class="uppercase md:text-xl text-lg font-bold font-mono">
                          Bybit
                        </div>
                        <p class="text-wrap text-[16px] break-words leading-tight font-mono">
                          Trade $PONKE on Bybit, a top global exchange known for
                          its ultra-fast matching engine and 24/7 support.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://crypto.com/exchange/trade/PONKE_USD"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="cursor-pointer md:hover:scale-[1.02] transition-all ease-in-out"
                >
                  <div class="p5 bg-skin text-black border-[3px] border-brown-dark/50 rounded-xl min-h-[100px] flex-1 w-full h-[145px]">
                    <div class="flex gap-4">
                      <img
                        src="https://www.ponke.xyz/images/integrations/cdc.png"
                        class="object-contain h-[55px] border-2 border-black rounded-full aspect-square"
                        alt="crypto.com"
                      />
                      <div>
                        <div class="uppercase md:text-xl text-lg font-bold font-mono">
                          crypto.com
                        </div>
                        <p class="text-wrap text-[16px] break-words leading-tight font-mono">
                          Buy and sell $PONKE on Bithumb.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ) : menu == 2 ? (
              <div
                class="grid md:grid-cols-3 grid-cols-1 max-w-[1200px] md:gap-5 gap-3 mt-8"
                data-aos="flip-up"
              >
                <a
                  href="https://www.ponkeswap.xyz/"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="cursor-pointer md:hover:scale-[1.02] transition-all ease-in-out"
                >
                  <div class="p5 bg-skin text-black border-[3px] border-brown-dark/50 rounded-xl min-h-[100px] flex-1 w-full h-[145px]">
                    <div class="flex gap-4 ">
                      <img
                        src="https://www.ponke.xyz/images/integrations/ponkeswap-square.png"
                        class="object-contain h-[55px] border-2 border-black rounded-full aspect-square"
                        alt="PonkeSwap"
                      />
                      <div>
                        <div class="uppercase md:text-xl text-lg font-bold font-mono">
                          PonkeSwap
                        </div>
                        <p class="text-wrap text-[16px] break-words leading-tight  font-mono">
                          A decentralized exchange (DEX) that brings together
                          fun, rewards, and exclusive perks for PONKE holders.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://wallet.coinbase.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="cursor-pointer md:hover:scale-[1.02] transition-all ease-in-out"
                >
                  <div class="p5 bg-skin text-black border-[3px] border-brown-dark/50 rounded-xl min-h-[100px] flex-1 w-full h-[145px]">
                    <div class="flex gap-4">
                      <img
                        src="https://www.ponke.xyz/images/integrations/coinbasewallet.png"
                        class="object-contain h-[55px] border-2 border-black rounded-full aspect-square"
                        alt="Coinbase Wallet"
                      />
                      <div>
                        <div class="uppercase md:text-xl text-lg font-bold font-mono">
                          Coinbase Wallet
                        </div>
                        <p class="text-wrap text-[16px] break-words leading-tight font-mono">
                          Store &amp; Swap $PONKE with Coinbase Wallet
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://jup.ag/swap/SOL-PONKE"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="cursor-pointer md:hover:scale-[1.02] transition-all ease-in-out"
                >
                  <div class="p5 bg-skin text-black border-[3px] border-brown-dark/50 rounded-xl min-h-[100px] flex-1 w-full h-[145px]">
                    <div class="flex gap-4">
                      <img
                        src="https://www.ponke.xyz/images/integrations/jupiter.jpg"
                        class="object-contain h-[55px] border-2 border-black rounded-full aspect-square"
                        alt="Jupiter"
                      />
                      <div>
                        <div class="uppercase md:text-xl text-lg font-bold font-mono">
                          Jupiter
                        </div>
                        <p class="text-wrap text-[16px] break-words leading-tight font-mono">
                          Find the best rates for trading $PONKE on Jupiter,
                          Solana's top aggregator.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://www.revolut.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="cursor-pointer md:hover:scale-[1.02] transition-all ease-in-out"
                >
                  <div class="p5 bg-skin text-black border-[3px] border-brown-dark/50 rounded-xl min-h-[100px] flex-1 w-full h-[145px]">
                    <div class="flex gap-4">
                      <img
                        src="https://www.ponke.xyz/images/integrations/revolut.png"
                        class="object-contain h-[55px] border-2 border-black rounded-full aspect-square"
                        alt="Revolut"
                      />
                      <div>
                        <div class="uppercase md:text-xl text-lg font-bold font-mono">
                          Revolut
                        </div>
                        <p class="text-wrap text-[16px] break-words leading-tight font-mono">
                          Buy and sell $PONKE Revolut, Europe's leading neobank
                          known for its innovative financial offerings.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://www.bybit.com/en/trade/spot/PONKE/USDT"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="cursor-pointer md:hover:scale-[1.02] transition-all ease-in-out"
                >
                  <div class="p5 bg-skin text-black border-[3px] border-brown-dark/50 rounded-xl min-h-[100px] flex-1 w-full h-[145px]">
                    <div class="flex gap-4">
                      <img
                        src="https://www.ponke.xyz/images/integrations/bybit.png"
                        class="object-contain h-[55px] border-2 border-black rounded-full aspect-square"
                        alt="Bybit"
                      />
                      <div>
                        <div class="uppercase md:text-xl text-lg font-bold font-mono">
                          Bybit
                        </div>
                        <p class="text-wrap text-[16px] break-words leading-tight font-mono">
                          Trade $PONKE on Bybit, a top global exchange known for
                          its ultra-fast matching engine and 24/7 support.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://crypto.com/exchange/trade/PONKE_USD"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="cursor-pointer md:hover:scale-[1.02] transition-all ease-in-out"
                >
                  <div class="p5 bg-skin text-black border-[3px] border-brown-dark/50 rounded-xl min-h-[100px] flex-1 w-full h-[145px]">
                    <div class="flex gap-4">
                      <img
                        src="https://www.ponke.xyz/images/integrations/cdc.png"
                        class="object-contain h-[55px] border-2 border-black rounded-full aspect-square"
                        alt="crypto.com"
                      />
                      <div>
                        <div class="uppercase md:text-xl text-lg font-bold font-mono">
                          crypto.com
                        </div>
                        <p class="text-wrap text-[16px] break-words leading-tight font-mono">
                          Buy and sell $PONKE on Bithumb.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ) : menu == 3 ? (
              <div
                class="grid md:grid-cols-3 grid-cols-1 max-w-[1200px] md:gap-5 gap-3 mt-8"
                data-aos="flip-up"
              >
                <a
                  href="https://www.ponkeswap.xyz/"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="cursor-pointer md:hover:scale-[1.02] transition-all ease-in-out"
                >
                  <div class="p5 bg-skin text-black border-[3px] border-brown-dark/50 rounded-xl min-h-[100px] flex-1 w-full h-[145px]">
                    <div class="flex gap-4 ">
                      <img
                        src="https://www.ponke.xyz/images/integrations/ponkeswap-square.png"
                        class="object-contain h-[55px] border-2 border-black rounded-full aspect-square"
                        alt="PonkeSwap"
                      />
                      <div>
                        <div class="uppercase md:text-xl text-lg font-bold font-mono">
                          PonkeSwap
                        </div>
                        <p class="text-wrap text-[16px] break-words leading-tight  font-mono">
                          A decentralized exchange (DEX) that brings together
                          fun, rewards, and exclusive perks for PONKE holders.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://wallet.coinbase.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="cursor-pointer md:hover:scale-[1.02] transition-all ease-in-out"
                >
                  <div class="p5 bg-skin text-black border-[3px] border-brown-dark/50 rounded-xl min-h-[100px] flex-1 w-full h-[145px]">
                    <div class="flex gap-4">
                      <img
                        src="https://www.ponke.xyz/images/integrations/coinbasewallet.png"
                        class="object-contain h-[55px] border-2 border-black rounded-full aspect-square"
                        alt="Coinbase Wallet"
                      />
                      <div>
                        <div class="uppercase md:text-xl text-lg font-bold font-mono">
                          Coinbase Wallet
                        </div>
                        <p class="text-wrap text-[16px] break-words leading-tight font-mono">
                          Store &amp; Swap $PONKE with Coinbase Wallet
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://jup.ag/swap/SOL-PONKE"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="cursor-pointer md:hover:scale-[1.02] transition-all ease-in-out"
                >
                  <div class="p5 bg-skin text-black border-[3px] border-brown-dark/50 rounded-xl min-h-[100px] flex-1 w-full h-[145px]">
                    <div class="flex gap-4">
                      <img
                        src="https://www.ponke.xyz/images/integrations/jupiter.jpg"
                        class="object-contain h-[55px] border-2 border-black rounded-full aspect-square"
                        alt="Jupiter"
                      />
                      <div>
                        <div class="uppercase md:text-xl text-lg font-bold font-mono">
                          Jupiter
                        </div>
                        <p class="text-wrap text-[16px] break-words leading-tight font-mono">
                          Find the best rates for trading $PONKE on Jupiter,
                          Solana's top aggregator.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://www.revolut.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="cursor-pointer md:hover:scale-[1.02] transition-all ease-in-out"
                >
                  <div class="p5 bg-skin text-black border-[3px] border-brown-dark/50 rounded-xl min-h-[100px] flex-1 w-full h-[145px]">
                    <div class="flex gap-4">
                      <img
                        src="https://www.ponke.xyz/images/integrations/revolut.png"
                        class="object-contain h-[55px] border-2 border-black rounded-full aspect-square"
                        alt="Revolut"
                      />
                      <div>
                        <div class="uppercase md:text-xl text-lg font-bold font-mono">
                          Revolut
                        </div>
                        <p class="text-wrap text-[16px] break-words leading-tight font-mono">
                          Buy and sell $PONKE Revolut, Europe's leading neobank
                          known for its innovative financial offerings.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://www.bybit.com/en/trade/spot/PONKE/USDT"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="cursor-pointer md:hover:scale-[1.02] transition-all ease-in-out"
                >
                  <div class="p5 bg-skin text-black border-[3px] border-brown-dark/50 rounded-xl min-h-[100px] flex-1 w-full h-[145px]">
                    <div class="flex gap-4">
                      <img
                        src="https://www.ponke.xyz/images/integrations/bybit.png"
                        class="object-contain h-[55px] border-2 border-black rounded-full aspect-square"
                        alt="Bybit"
                      />
                      <div>
                        <div class="uppercase md:text-xl text-lg font-bold font-mono">
                          Bybit
                        </div>
                        <p class="text-wrap text-[16px] break-words leading-tight font-mono">
                          Trade $PONKE on Bybit, a top global exchange known for
                          its ultra-fast matching engine and 24/7 support.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ) : menu == 4 ? (
              <div
                class="grid md:grid-cols-3 grid-cols-1 max-w-[1200px] md:gap-5 gap-3 mt-8"
                data-aos="flip-up"
              >
                <a
                  href="https://wallet.coinbase.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="cursor-pointer md:hover:scale-[1.02] transition-all ease-in-out"
                >
                  <div class="p5 bg-skin text-black border-[3px] border-brown-dark/50 rounded-xl min-h-[100px] flex-1 w-full h-[145px]">
                    <div class="flex gap-4">
                      <img
                        src="https://www.ponke.xyz/images/integrations/coinbasewallet.png"
                        class="object-contain h-[55px] border-2 border-black rounded-full aspect-square"
                        alt="Coinbase Wallet"
                      />
                      <div>
                        <div class="uppercase md:text-xl text-lg font-bold font-mono">
                          Coinbase Wallet
                        </div>
                        <p class="text-wrap text-[16px] break-words leading-tight font-mono">
                          Store &amp; Swap $PONKE with Coinbase Wallet
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://jup.ag/swap/SOL-PONKE"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="cursor-pointer md:hover:scale-[1.02] transition-all ease-in-out"
                >
                  <div class="p5 bg-skin text-black border-[3px] border-brown-dark/50 rounded-xl min-h-[100px] flex-1 w-full h-[145px]">
                    <div class="flex gap-4">
                      <img
                        src="https://www.ponke.xyz/images/integrations/jupiter.jpg"
                        class="object-contain h-[55px] border-2 border-black rounded-full aspect-square"
                        alt="Jupiter"
                      />
                      <div>
                        <div class="uppercase md:text-xl text-lg font-bold font-mono">
                          Jupiter
                        </div>
                        <p class="text-wrap text-[16px] break-words leading-tight font-mono">
                          Find the best rates for trading $PONKE on Jupiter,
                          Solana's top aggregator.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ) : menu == 5 ? (
              <div
                class="grid md:grid-cols-3 grid-cols-1 max-w-[1200px] md:gap-5 gap-3 mt-8"
                data-aos="flip-up"
              >
                <a
                  href="https://www.revolut.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="cursor-pointer md:hover:scale-[1.02] transition-all ease-in-out"
                >
                  <div class="p5 bg-skin text-black border-[3px] border-brown-dark/50 rounded-xl min-h-[100px] flex-1 w-full h-[145px]">
                    <div class="flex gap-4">
                      <img
                        src="https://www.ponke.xyz/images/integrations/revolut.png"
                        class="object-contain h-[55px] border-2 border-black rounded-full aspect-square"
                        alt="Revolut"
                      />
                      <div>
                        <div class="uppercase md:text-xl text-lg font-bold font-mono">
                          Revolut
                        </div>
                        <p class="text-wrap text-[16px] break-words leading-tight font-mono">
                          Buy and sell $PONKE Revolut, Europe's leading neobank
                          known for its innovative financial offerings.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://www.bybit.com/en/trade/spot/PONKE/USDT"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="cursor-pointer md:hover:scale-[1.02] transition-all ease-in-out"
                >
                  <div class="p5 bg-skin text-black border-[3px] border-brown-dark/50 rounded-xl min-h-[100px] flex-1 w-full h-[145px]">
                    <div class="flex gap-4">
                      <img
                        src="https://www.ponke.xyz/images/integrations/bybit.png"
                        class="object-contain h-[55px] border-2 border-black rounded-full aspect-square"
                        alt="Bybit"
                      />
                      <div>
                        <div class="uppercase md:text-xl text-lg font-bold font-mono">
                          Bybit
                        </div>
                        <p class="text-wrap text-[16px] break-words leading-tight font-mono">
                          Trade $PONKE on Bybit, a top global exchange known for
                          its ultra-fast matching engine and 24/7 support.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Integrations;
