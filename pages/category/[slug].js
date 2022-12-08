import React from 'react';
import { useRouter } from 'next/router';
import { getAPIPosts } from '../../services';
import { getGraphCategories, getGraphCategoryPost } from '../../services';
import { PostCard, Categories, Loader } from '../../components';

const CategoryPost = ({ posts }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto px-8 mb-8">
      <div className="lg:col-span-8 col-span-">
        {posts.map((post, index) => (
          <div key={index}>
            <PostCard key={index} post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default CategoryPost;

// // Fetch data at build time
// export async function getStaticProps({ params }) {
//   const posts = await getGraphCategoryPost(params.slug);
//   return {
//     props: { posts },
//   };
// }

// Fetch data at build time
export async function getServerSideProps() {
  const posts = (await getAPIPosts()) || [];
  return {
    props: { posts },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
// export async function getStaticPaths() {
//   const categories = await getGraphCategories();
//   return {
//     paths: categories.map(({ slug }) => ({ params: { slug } })),
//     fallback: true,
//   };
// }