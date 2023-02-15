import { ArrowRightIcon } from '@heroicons/react/solid';
import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';

export default function Navbar() {
  const { data } = useContext(DataContext);
  const { navBar } = data;

  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            {navBar.title}
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          {navBar.tabs.map((tab, index) => (
            <a href={tab.value} key={index} className="mr-5 hover:text-white">
              {tab.text}
            </a>
          ))}
        </nav>
        <a
          href={navBar.finalTab.value}
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          {navBar.finalTab.text}
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
