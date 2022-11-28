import React from 'react';
import Image from 'next/image';

import { graphCMSImageLoader } from '../util';

const Author = ({ author }) => (
  <div className="flex flex-col justify-center items-center text-center mt-20 mb-8 p-12 relative rounded-lg bg-white shadow-xl">
    <div className='aspect-square'>
      <Image
        unoptimized
        loader={graphCMSImageLoader}
        alt={author.name}
        height="100"
        width="100"
        className="aspect-square w-20 h-20 rounded-full border-2 border-indigo-500/100 shadow-lg shadow-indigo-500/50"
        src={author.photo.url}
      />
    </div>
    <h3 className="text-black opacity-90 mt-4 mb-4 text-xl font-bold">{author.name}</h3>
    <p className="text-black opacity-50 text-xs">{author.bio}</p>
  </div>
);

export default Author;