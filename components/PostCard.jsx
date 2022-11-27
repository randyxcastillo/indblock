import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { graphCMSImageLoader } from '../util';

const PostCard = ({ post }) => (
  <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8 mt-5">
    <h1 className="transition duration-200 text-left mb-8 m-4 cursor-pointer hover:text-blue-600 text-2xl font-semibold">
      <Link href={`/post/${post.slug}`}>
        <div className="relative overflow-hidden pb-80">
          <img src={post.featuredImage.url} alt="" className="object-top absolute h-80 w-full object-cover rounded-lg" />
        </div>
        <div className="relative overflow-hidden my-3">
          {post.title}
        </div>
      </Link>
    </h1>
    <div className="block lg:flex text-center items-center justify-center my-5 w-full">
      <div className="flex items-left justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 items-center">
        <Image
          unoptimized
          loader={graphCMSImageLoader}
          alt={post.author.name}
          height="25"
          width="25"
          className="align-left rounded-full"
          src={post.author.photo.url}
        />
        <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">{post.author.name}</p>
      </div>
      <div className="font-medium text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="align-middle">{moment(post.datePublished).format('MMM DD, YYYY')}</span>
      </div>
    </div>
    <p className="text-left text-l text-gray-700 font-normal my-4 m-4">
      {post.excerpt}
    </p>
    <div className="text-center m-4">
      <Link href={`/post/${post.slug}`}>
        <span className="transition duration-300 ease transform hover:-translate-y-0.5 
                         inline-block bg-blue-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer
                         hover:bg-white hover:shadow-2xl hover:text-blue-600"
        >Continue Reading</span>
      </Link>
    </div>
  </div>
);

export default PostCard;