import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';

import { getGraphSimilarPosts} from '../services';

const PostWidget = ({ posts, categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [dataFrom, setdataFrom] = useState();
  useEffect(() => {
    if (slug) {
      getGraphSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
      setdataFrom('graphql');
    } else {
      setRelatedPosts(posts);
      setdataFrom('api');
    }
    
  }, [slug]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8 mt-5">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">{slug ? 'Related Posts' : 'Trending News'}</h3>
      {relatedPosts.map((post, index) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div className="flex-grow text-xs hover:text-blue-600">
            {
              dataFrom === 'api' ? 
              <>
                <p className="text-gray-500">{moment(post.datePublished).format('MMM DD, YYYY')}</p>
              </>
              :
              <>
                <p className="text-gray-500">{moment(post.date).format('MMM DD, YYYY')}</p>
              </>
            }
            
            {
              dataFrom === 'api' ? 
                <>
                <Link href = {post.url} target="_blank" className="text-md" key={index}>{post.name}</Link>
                </>  
                :
                <>
                <Link href={`/post/${post.slug}`} className="text-md" key={index}>{post.title}</Link> 
                </>
            }
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;