import React from 'react';
import moment from 'moment';
import Link from 'next/link';

const FeaturedPostCard = ({ post }) => (
  <div className="flex items-center justify-between flex-wrap h-100 p-3 my-8 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg 
                  hover:shadow-lg hover:shadow-blue-500/50 hover:text-blue-500">
      <Link href={`/post/${post.slug}`}><span className="cursor-pointer" />
        <div className="mx-auto flex justify-center">
          <img className="flex items-center flex-shrink-0 h-40 object-cover rounded-xl" src={post.featuredImage.url}/>
        </div>
        <div className="p-1">
          <p className="font-bold text-l">{moment(post.datePublished).format('MMM DD, YYYY')}</p>
          <p className="text-sm mt-2 h-20 text-ellipsis overflow-hidden ...">{post.title}</p>
        </div>
      </Link>
  </div>
);

export default FeaturedPostCard;