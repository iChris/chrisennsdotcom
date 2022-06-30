// src/posts-data.11ty.js
class PostsDataJson {
  data() {
    return {
      permalink: "/posts-data.json",
    };
  }

  render(data) {
    const posts = data.collections.posts.map((post) => ({
      status: "published",
      visibility: "public",
      title: post.data.title,
      html: post.templateContent,      
      published_at: post.published_at,
      slug: post.url
    }));

    return JSON.stringify(posts);
  }
}

module.exports = PostsDataJson;