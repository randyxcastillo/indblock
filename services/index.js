import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const apiKey = process.env.NEWS_API_KEY;
import axios from 'axios';

export const getGraphPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            datePublished
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  try {
    const result = await request(graphqlAPI, query);
    return result.postsConnection.edges;
  } catch(e) {
    console.log(e);
  }
};

export const getGraphCategories = async () => {
  const query = gql`
    query GetGategories {
        categories {
          name
          slug
        }
    }
  `;
  try {
    const result = await request(graphqlAPI, query);
    return result.categories;
  } catch(e) {
    console.log(e);
  }
};

export const getGraphPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug : String!) {
      post(where: {slug: $slug}) {
        title
        excerpt
        featuredImage {
          url
        }
        author{
          name
          bio
          photo {
            url
          }
        }
        createdAt
        datePublished
        slug
        content {
          raw
        }
        categories {
          name
          slug
        }
      }
    }
  `;
    
  try {
    const result = await request(graphqlAPI, query, { slug });
    return result.post;
    
  } catch(e) {
    console.log(e);
  }
};

export const getGraphSimilarPosts = async (categories, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        datePublished
        slug
      }
    }
  `;
  try {
    const result = await request(graphqlAPI, query, { slug, categories });
    return result.posts;
  } catch(e) {
    console.log(e);
  }
};

export const getGraphAdjacentPosts = async (createdAt, slug) => {
  const query = gql`
    query GetAdjacentPosts($createdAt: DateTime!,$slug:String!) {
      next:posts(
        first: 1
        orderBy: createdAt_ASC
        where: {slug_not: $slug, AND: {createdAt_gte: $createdAt}}
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        datePublished
        slug
      }
      previous:posts(
        first: 1
        orderBy: createdAt_DESC
        where: {slug_not: $slug, AND: {createdAt_lte: $createdAt}}
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  try {
    const result = await request(graphqlAPI, query, { slug, createdAt });
    return { next: result.next[0], previous: result.previous[0] };
  } catch(e) {
    console.log(e);
  }
};

export const getGraphCategoryPost = async (slug) => {
  const query = gql`
    query GetCategoryPost($slug: String!) {
      postsConnection(where: {categories_some: {slug: $slug}}) {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            datePublished
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;
  try {
    const result = await request(graphqlAPI, query, { slug });
    return result.postsConnection.edges;
  } catch(e) {
    console.log(e);
  }
};

export const getGraphFeaturedPosts = async () => {
  const query = gql`
    query GetCategoryPost() {
      posts(where: {featuredPost: true}) {
        author {
          name
          photo {
            url
          }
        }
        featuredImage {
          url
        }
        title
        slug
        createdAt
        datePublished
      }
    }   
  `;
  try {
    const result = await request(graphqlAPI, query);
    return result.posts;
  } catch(e) {
    console.log(e);
  }
};

export const submitGraphComment = async (obj) => {
  try {
    const result = await fetch('/api/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    });

    return result.json();
  } catch(e) {
    console.log(e);
  }
};

export const getGraphComments = async (slug) => {
  const query = gql`
    query GetComments($slug:String!) {
      comments(where: {post: {slug:$slug}}){
        name
        createdAt
        comment
      }
    }
  `;
  try {
    const result = await request(graphqlAPI, query, { slug });
    return result.comments;
  } catch(e) {
    console.log(e);
  }
};

export const getGraphRecentPosts = async () => {
  const query = gql`
    query GetPostDetails() {
      posts(
        orderBy: createdAt_ASC
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        datePublished
        slug
      }
    }
  `;
  try {
    const result = await request(graphqlAPI, query);
    return result.posts;
  } catch(e) {
    console.log(e);
  }
};

export const getAPIPosts = async () => {
  const options = {
    method: 'GET',
    url: 'https://crypto-news-live11.p.rapidapi.com/all',
    params: {page: '1', per_page: '500'},
    headers: {
      'X-RapidAPI-Key': '274b2dcf1emsh73ed1a0fb4e0809p12fbd6jsn8d18cebbb496',
      'X-RapidAPI-Host': 'crypto-news-live11.p.rapidapi.com'
    }
  };
  
  const result = await axios.request(options);
  return result.data.news;
}

export const getAPIRecentPosts = async () => { 
  const options = {
    method: 'GET',
    url: 'https://crypto-news-live11.p.rapidapi.com/all',
    params: {page: '1', per_page: '10'},
    headers: {
      'X-RapidAPI-Key': '274b2dcf1emsh73ed1a0fb4e0809p12fbd6jsn8d18cebbb496',
      'X-RapidAPI-Host': 'crypto-news-live11.p.rapidapi.com'
    }
  };
  
  const result = await axios.request(options);
  return result.data.news;
};