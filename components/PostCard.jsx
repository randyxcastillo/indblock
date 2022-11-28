import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { graphCMSImageLoader } from '../util';

const PostCard = ({ post }) => (
  <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8 mt-5">
    <h1 className="transition duration-200 text-left mb-8 m-4 cursor-pointer hover:text-blue-600 text-2xl font-semibold">
        <div className="relative overflow-hidden pt-4 pb-72 object-cover rounded-lg">
          <img src={post.img} alt="" className="object-top absolute w-full h-full object-cover rounded-lg" />
        </div>
        <div className="my-3 text-lg">
          {post.title}
        </div>
    </h1>
    <div className="block lg:flex text-center items-center justify-center my-5 w-full">
      <div className="font-medium text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="align-middle">{moment(post.date).format('MMM DD, YYYY')}</span>
      </div>
    </div>
    <div className="text-center mt-8">
      <Link href = {post.link} target="_blank">
        <span className="transition duration-300 ease transform hover:-translate-y-0.5 
                         inline-block bg-blue-600 text-base font-medium rounded-full text-white px-8 py-3 cursor-pointer
                         hover:bg-white hover:shadow-2xl hover:text-blue-600"
        >Read News</span>
      </Link>
    </div>
  </div>
);

export default PostCard;