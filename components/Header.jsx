import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getGraphCategories } from '../services';
import indblockLogo from '../public/indblockLogo.png';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getGraphCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className='flex items-center justify-between flex-wrap ml-5 p-6'>
      <div className="flex items-center flex-shrink-0 mr-6 text-white">
          <Link href="/">
            <Image src={indblockLogo} alt="" height="25" width="130" style={{width:"auto", height:"auto"}}/>
          </Link>
      </div>
      <div className="flex items-center py-2">
        {/* <div className="flex items-center mr-4 px-3 py-2">
          <div className="hidden md:float-left md:contents">
            {categories.map((category, index) => (
              <Link key={index} href={`/category/${category.slug}`}>
                <span className="text-black font-semibold cursor-pointer hover:text-blue-500">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div> */}
        <div className="flex items-center py-2 px-4">
          <Link href="https://www.twitter.com/indblock" target="_blank">
            <svg
              className="w-6 h-6 text-black hover:text-blue-500 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path
                d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;