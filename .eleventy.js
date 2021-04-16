const rssPlugin = require('@11ty/eleventy-plugin-rss');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const fs = require("fs");

// Import filters
const dateFilter = require('./src/filters/date-filter.js');
const markdownFilter = require('./src/filters/markdown-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');

// Import transforms
const htmlMinTransform = require('./src/transforms/html-min-transform.js');
const parseTransform = require('./src/transforms/parse-transform.js');


// Import data files
const site = require('./src/_data/site.json');
// const feedbinStars = require("eleventy-plugin-feedbin-stars");

module.exports = function(config) {
  // Filters
  config.addFilter('dateFilter', dateFilter);
  config.addFilter('markdownFilter', markdownFilter);
  config.addFilter('w3DateFilter', w3DateFilter);

  // Feedbin Stars plugin
 // config.addPlugin(feedbinStars, {
 //   feed_id: "caffb453ffdb88f1370a2d424878787a",
 //   cache_duration: "4h",
 //   });
 
  // Layout aliases
  config.addLayoutAlias('home', 'layouts/home.njk');

  // Transforms
  config.addTransform('htmlmin', htmlMinTransform);
  config.addTransform('parse', parseTransform);

  // Permalink possible fix from https://github.com/11ty/eleventy/issues/923
  //   "permalink": "{{ page | post_permalink }}"
config.addFilter("post_permalink", page => {
  const yyyy = page.date.getFullYear();
  const mm = String(page.date.getMonth() + 1).padStart(2, "0");
  const slug = page.fileSlug.replace(/^\d{4}-\d{2}-\d{2}\./, "");
  return `${yyyy}/${mm}/${slug}/`;
});

config.addFilter('dateFilter', dateFilter);
config.addFilter('markdownFilter', markdownFilter);
config.addFilter('w3DateFilter', w3DateFilter);

  // Passthrough copy
  config.addPassthroughCopy('src/fonts');
  config.addPassthroughCopy('src/images');
  config.addPassthroughCopy('src/js');
  config.addPassthroughCopy('src/admin/config.yml');
  config.addPassthroughCopy('src/admin/previews.js');
  config.addPassthroughCopy('node_modules/nunjucks/browser/nunjucks-slim.js');

  const now = new Date();

  // Custom collections
  const livePosts = post => post.date <= now && !post.data.draft;
  config.addCollection('posts', collection => {
    return [
      ...collection.getFilteredByGlob('./src/posts/*.md').filter(livePosts)
    ].reverse();
  });

  config.addCollection('postFeed', collection => {
    return [...collection.getFilteredByGlob('./src/posts/*.md').filter(livePosts)]
      .reverse()
      .slice(0, site.maxPostsPerPage);
  });

  const embedYouTube = require("eleventy-plugin-youtube-embed");
  
  // Plugins
  config.addPlugin(rssPlugin);
  config.addPlugin(syntaxHighlight);
  config.addPlugin(embedYouTube);

  
  // 404 
  config.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, browserSync) {
        const content_404 = fs.readFileSync('dist/404.html');

        browserSync.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      }
    }
  });

  return {
    dir: {
      input: 'src',
      output: 'dist'
    },
    passthroughFileCopy: true
  };



};

