import { useState, useEffect } from 'react';

import logo from './asset/img/logo.jpeg';

import bgImage from './asset/img/bg-image.jpg';

import mainImage from './asset/img/hari-removebg-preview.png';
import { FaHandPointer, FaFacebookF, FaInstagram } from 'react-icons/fa';

import './App.css';

const LINKS = {
  explore: 'http://kairosoffers.com/hairl?get=hair',
  women: 'http://kairosoffers.com/hgum?get=hair',
  men: 'http://kairosoffers.com/hgum2?get=hair',
};

function App() {
  const [menu, setMenu] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen px-5 bg-slate-950 flex flex-col items-center justify-center">
        {/* Header */}
        <header className="w-full max-w-screen-md px-4 py-6 bg-slate-800 rounded-md shadow-md mb-8 animate-pulse">
          <div className="h-8 bg-slate-700 rounded"></div>
          <div className="h-4 bg-slate-700 rounded mt-2"></div>
        </header>

        {/* Body - Loading State with pulse animation */}
        <main className="w-full max-w-screen-lg grid grid-cols-1 sm:grid-cols-2  gap-6">
          {/* Card 1 */}
          <div className="shadow rounded-md p-4 w-full mx-auto animate-pulse">
            <div className="h-4 bg-slate-700 rounded mb-4"></div>
            <div className="h-4 bg-slate-700 rounded mb-4"></div>
            <div className="h-6 bg-slate-700 rounded"></div>
          </div>

          <div class="shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div class="animate-pulse flex space-x-4">
              <div class="rounded-full bg-slate-700 h-10 w-10"></div>
              <div class="flex-1 space-y-6 py-1">
                <div class="h-2 bg-slate-700 rounded"></div>
                <div class="space-y-3">
                  <div class="grid grid-cols-3 gap-4">
                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                  </div>
                  <div class="h-2 bg-slate-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Repeating the card structure */}
          <div className="shadow rounded-md p-4 w-full mx-auto animate-pulse">
            <div className="h-4 bg-slate-700 rounded mb-4"></div>
            <div className="h-4 bg-slate-700 rounded mb-4"></div>
            <div className="h-6 bg-slate-700 rounded"></div>
          </div>

          <div class=" shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div class="animate-pulse flex space-x-4">
              <div class="rounded-full bg-slate-700 h-10 w-10"></div>
              <div class="flex-1 space-y-6 py-1">
                <div class="h-2 bg-slate-700 rounded"></div>
                <div class="space-y-3">
                  <div class="grid grid-cols-3 gap-4">
                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                  </div>
                  <div class="h-2 bg-slate-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full max-w-screen-md px-4 py-6 bg-slate-800 rounded-md shadow-md mt-8 animate-pulse">
          <div className="h-6 bg-slate-700 rounded"></div>
        </footer>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden flex flex-col `}>
      {/* ---------------Header Section------------- */}
      <header
        className="relative text-gray-50  w-dvw bg-cover bg-center min-h-screen"
        style={{ backgroundImage: `url(${bgImage})` }}>
        {/* Overlay */}
        <div className="absolute  inset-0 bg-black opacity-80"></div>

        <nav className="relative border-b border-gray-300 px-11 flex items-center justify-between z-10 p-6">
          {/* Navigation Links */}
          <ul className="hidden text-white md:flex space-x-8">
            <li className="border-r border-gray-300 pr-4">
              <a
                href={LINKS.explore}
                className="sm:hover:text-gray-400 rounded-lg">
                Explore All 🌎
              </a>
            </li>
            <li className="border-r border-gray-300 pr-4">
              <a
                className="sm:hover:text-gray-400 rounded-lg"
                href={LINKS.men}>
                Men 👨
              </a>
            </li>
            <li className="border-r border-gray-300 pr-4">
              <a
                className="sm:hover:text-gray-400 rounded-lg"
                href={LINKS.women}>
                Women 👩
              </a>
            </li>
          </ul>

          {/* Logo */}
          <div className="flex items-center justify-center text-gray-50  gap-2">
            <img
              src={logo}
              alt="Logo"
              className="w-11 h-11 mb-4 rounded-full"
            />
          </div>
        </nav>

        <div className="relative px-2 lg:px-11">
          {/* Background with Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900 opacity-50 z-0"></div>

          <div className="relative  w-full flex flex-col  lg:flex-row justify-center items-center gap-8 my-16 py-16 px-8 bg-transparent rounded-lg shadow-lg z-10">
            {/* Headline Section */}
            <div className="flex px-4 flex-col gap-2 w-full lg:w-1/2">
              <h1 className="text-white uppercase sm:text-7xl text-4xl font-extrabold tracking-wide">
                Hair
              </h1>
              <h1 className="text-orange-500 uppercase sm:text-7xl text-4xl font-extrabold tracking-wide">
                Voluum
              </h1>
              <p className="text-gray-200 text-lg leading-relaxed">
                Top Scientist Reveals Darkest Hair Loss Secret: “This Is What Is
                Making You Bald - Remove It and Your Hair Will Be Full Again”
              </p>
              <a
                href={LINKS.explore}
                className="mt-6 px-6 py-3 text-center bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg rounded-lg shadow-md transition w-4/5 duration-300 ease-in-out">
                Learn More
              </a>
            </div>

            {/* Grid Section */}
            <div className="mt-10  lg:w-1/2 w-full grid  grid-cols-2">
              <div className=" bg-white col-span-2 sm:col-span-1 p-6 rounded-lg shadow-lg">
                <GridCard
                  bg_stlying={
                    'bg-white py-6 px-4 felx flex-col gap-2 text-slate-900 px-3'
                  }
                  paragraph={
                    'The hair loss treatment Manufacturing industry is a $3.9 billion industry. And their goal is not to make your hair grow back and not fall off again.'
                  }
                  paragraph_styling={'text-base'}
                  heading_styling={'text-2xl mb-2 sm:text-4xl font-bold'}
                  heading={'Men'}
                />
              </div>
              <div className=" p-6 rounded-lg shadow-lg"></div>
              <div className=" p-6 rounded-lg shadow-lg"></div>
              <div className="bg-gray-900 col-span-2 sm:col-span-1 p-6 rounded-lg shadow-lg">
                <GridCard
                  bg_stlying={'py-6 px-4 felx flex-col gap-4 px-3'}
                  heading={' Women'}
                  paragraph_styling={'text-base'}
                  heading_styling={'text-2xl mb-2 sm:text-4xl font-bold'}
                  paragraph={
                    'Lagos Woman Says: If You Want Your Hair To Grow Back… Don’t Wash It With Rice.'
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* DropDown Menu Effect */}
      <div className="relative">
        <div
          className={`fixed md:hidden  rounded-br-3xl z-50  transition-all duration-500 ease-in-out   bg-white left-90 right-0 bottom-full rounded-tl-2xl rounded-bl-full p-4 top-0 ${
            menu
              ? 'w-4/5 h-1/2 backdrop-blur  box-content pl-4  '
              : 'min-w-20 min-h-20'
          }`}>
          <div
            onClick={() => setMenu(!menu)}
            className={`${menu ? '' : ''}`}>
            <div
              className={`text-slate-950 md:hidden text-xl flex flex-col px-2 justify-between items-center cursor-pointer ${
                menu ? ' z-50 py-6 ml-60  sm:ml-96' : 'space-y-2 px-0'
              }`}>
              <span
                className={`block w-8 h-1 bg-slate-950 transition-transform duration-300 ${
                  menu ? 'transform rotate-45 absolute' : ''
                }`}></span>
              <span
                className={`block w-8 h-1 bg-slate-950 transition-transform duration-300 ${
                  menu ? 'transform -rotate-45 absolute' : ''
                }`}></span>
            </div>
          </div>

          <ul
            className={`${
              menu
                ? 'flex flex-col text-gray-900  justify-start py-4 px-20   space-y-4 transition-all duration-500 ease-in-out'
                : 'hidden'
            }`}>
            <li className="w-1/2">
              <a
                href={LINKS.explore}
                className="text-xl text-gray-950 flex item-center justify-between hover:text-gray-400">
                <span>Explore All </span>
                <span>🌎</span>
              </a>
            </li>
            <li className="w-1/2">
              <a
                href={LINKS.men}
                className="text-xl text-gray-950 flex item-center justify-between hover:text-gray-400">
                <span> Men </span>
                <span>👨</span>
              </a>
            </li>
            <li className="w-1/2">
              <a
                href={LINKS.women}
                className="text-xl text-gray-950 flex item-center justify-between hover:text-gray-400">
                <span>Women </span>
                <span> 👩</span>
              </a>
            </li>
            <li className="w-1/2">
              <a
                href={LINKS.explore}
                className="text-xl text-gray-950 flex item-center justify-between hover:text-gray-400">
                <span> Shop</span>
                <span>🏚</span>
              </a>
            </li>
          </ul>
        </div>

        <div
          className={`fixed md:hidden inset-0 transition-opacity z-30 h-full duration-500 ${
            menu
              ? 'backdrop-blur-md bg-black/30'
              : 'opacity-0 pointer-events-none'
          }`}></div>
      </div>

      {/* Chat icon */}
      <a
        href="https://wa.me/+2349061472565"
        className="mt-4 fixed right-10 bottom-10  bg-white text-black px-4 py-2 rounded-full flex items-center justify-center text-xl capitalize sm:hover:bg-gray-200">
        <ChatIcon />
      </a>

      {/* ---------------Main Section------------- */}

      <main className="bg-teal-900 py-8 min-h-screen flex flex-col lg:flex-row lg:items-center lg:justify-between px-4 sm:px-11">
        {/* Left Content */}
        <div className="px-6 py-4 flex flex-col gap-6 w-full lg:w-1/2">
          <h1 className="font-bold text-4xl sm:text-5xl text-slate-50 uppercase leading-tight">
            About
          </h1>
          <div className="bg-gray-200 bg-opacity-70 rounded-lg p-6 sm:px-11 flex flex-col gap-6 py-8 sm:w-4/5">
            <p className="text-lg leading-relaxed text-gray-800">
              <b>Hair Voluum</b> is a combination of 7 different herbs and
              natural minerals sourced from nature which stop excess production
              of DHT, rebuild your hair follicles and stop the growth and spread
              of bacteria on your head.
            </p>
            <List
              arr={[
                'Saw Palmetto',
                'Fo-ti',
                'Pygeum Bark ',
                'Horsetail',
                'Pumpkin Seed',
              ]}
            />
            <button
              className="relative w-60 py-2 text-black border border-slate-950 rounded-full transition-all duration-300 hover:bg-black hover:text-white flex items-center justify-center space-x-2"
              aria-label="Explore More">
              <span>Buy Now</span>
              <span className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center">
                <FaHandPointer className="text-black w-6 h-6 sm:hover:text-white rotate-45 skew-y-12 animate-tap hover:text-white" />
                <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-sky-500 opacity-75"></span>
                {/* <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span> */}
              </span>
            </button>

            <style jsx>{`
              @keyframes tap {
                0% {
                  transform: translateY(0);
                }
                50% {
                  transform: translateY(3px);
                }
                100% {
                  transform: translateY(0);
                }
              }
              .animate-tap {
                animation: tap 1.5s infinite ease-in-out;
              }
            `}</style>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-start items-center mt-8 sm:mt-0">
          <img
            src={mainImage}
            alt="hair voluum"
            className="w-90 h-90 object-cover rounded-lg"
          />
        </div>
      </main>

      {/* ---------------Footer Section------------- */}
      <Footer />
    </div>
  );
}

export default App;

function ChatIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
      />
    </svg>
  );
}

function GridCard({
  logo,
  heading,
  paragraph,
  bg_stlying,
  heading_styling,
  paragraph_styling,
}) {
  return (
    <div className={bg_stlying}>
      <span>{logo}</span>
      <h2 className={heading_styling}>{heading}</h2>
      <p className={paragraph_styling}>{paragraph}</p>
    </div>
  );
}

function List({ arr }) {
  return (
    <ul>
      {arr.map((list, i) => (
        <div
          key={i}
          className="flex items-center italic gap-4">
          {/* Styling the numbering */}
          <span className="text-xl font-bold text-gray-600 italic rounded-full w-8 h-8 flex items-center justify-center">
            {arr.length <= 9 ? `0${i + 1}` : i + 1}
          </span>
          <li className="text-gray-700">{list}</li>
        </div>
      ))}
    </ul>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Cozy Health Consult</h2>
          <p className="text-gray-400">
            We offer the best services for your health and well-being. Join us
            to transform your health.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a
                href={LINKS.explore}
                className="hover:text-gray-300">
                Explore
              </a>
            </li>
            <li>
              <a
                href={LINKS.women}
                className="hover:text-gray-300">
                Women
              </a>
            </li>
            <li>
              <a
                href={LINKS.men}
                className="hover:text-gray-300">
                Men
              </a>
            </li>
            <li>
              <a
                href={LINKS.women}
                className="hover:text-gray-300">
                Buy Now
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">Follow Us</h2>
          <SocialMediaIcons />
        </div>

        {/* Newsletter Subscription */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">Subscribe</h2>
          <p className="text-gray-400">
            Get the latest updates and offers right in your inbox.
          </p>
          <form className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-md text-gray-900 focus:outline-none w-full"
            />
            <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md font-semibold">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400">
        <p>&copy; 2024 Cozy Health Consult. All rights reserved.</p>
      </div>
    </footer>
  );
}

function SocialMediaIcons() {
  return (
    <div className="flex space-x-4 justify-start mt-4">
      {/* Facebook Icon */}
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 transition-all duration-300 hover:text-blue-800"
        aria-label="Facebook">
        <FaFacebookF className="w-8 h-8" />
      </a>

      {/* Instagram Icon */}
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-600 transition-all duration-300 hover:text-pink-800"
        aria-label="Instagram">
        <FaInstagram className="w-8 h-8" />
      </a>
    </div>
  );
}
