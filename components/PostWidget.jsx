import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';

import { getGraphSimilarPosts, getAPIRecentPosts } from '../services';

const PostWidget = ({ posts, categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  let dataFrom = '';
  useEffect(() => {
    if (slug) {
      getGraphSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
        dataFrom = 'graphql';
      });
    } else {
      setRelatedPosts(posts);
      dataFrom = 'api';
    }
  }, [slug]);

  // Lastest and Similar Posts
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8 mt-5">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">{slug ? 'Related Posts' : 'Recent Posts'}</h3>
      {relatedPosts.map((post, index) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div className="flex-grow text-xs hover:text-blue-600">
            <p className="text-gray-500">{moment(post.date).format('MMM DD, YYYY')}</p>
            {
              dataFrom === 'api' ? 
                <Link href = {post.link} target="_blank" className="text-md" key={index}>{post.title}</Link>  :
                <Link href={`/post/${post.slug}`} className="text-md" key={index}>{post.title}</Link> 
            }
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;