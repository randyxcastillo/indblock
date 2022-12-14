import { FeaturedPosts } from '../sections/index';
import { PostCard, PostWidget } from '../components';
import { getAPIPosts } from '../services';

export default function Home ({ posts }) {
  return (
    <div className="container mx-auto px-6 mb-4">
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 col-span-1">
          <PostWidget className="lg:sticky relative top-8" posts={posts.slice(0, 5)}/>
        </div>
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, key) => (
            <div key={key}>
              <PostCard post={post}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Fetch data at build time
export async function getServerSideProps() {
  const posts = (await getAPIPosts()) || [];
  return {
    props: { posts },
  };
}
