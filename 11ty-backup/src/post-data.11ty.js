// src/posts-data.11ty.js
class PostsDataJson {
  data() {
    return {
      permalink: "/posts-data.json",
    };
  }

  render(data) {
    const posts = data.collections.posts.map((post) => ({
      title: post.data.title,
      url: post.url,
      content: post.templateContent,
    }));

    return JSON.stringify(posts);
  }
}

module.exports = PostsDataJson;