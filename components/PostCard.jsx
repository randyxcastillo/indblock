import React from 'react';
import moment from 'moment';
import Link from 'next/link';

const PostCard = ({post}) => {

    return (
      <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-6 mb-8">
            <p className="pt-5 transition duration-200 text-left m-4 text-xl font-semibold">
              {post.name}
            </p>
            <p className="transition duration-200 text-left mb-8 m-4">
              {post.description}
            </p>
            <div className="text-center mt-6">
              <Link href = {post.url} target="_blank">
                <span className="text-center transition duration-300 ease transform hover:-translate-y-0.5 
                                inline-block bg-blue-600 text-base font-medium rounded-full text-white px-8 py-3 cursor-pointer
                                hover:bg-white hover:shadow-2xl hover:text-blue-600"
                >Read News</span>
              </Link>
            </div>
      </div>
    )
}

export default PostCard;