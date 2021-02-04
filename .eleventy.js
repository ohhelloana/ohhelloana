const pluginRss = require("@11ty/eleventy-plugin-rss");
const moment = require('moment');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {

  // add layout aliases that were originally set up in jekyll. This might need a refactor in the future.
  eleventyConfig.addLayoutAlias('bookmarks', 'layouts/bookmarks.njk');
  eleventyConfig.addLayoutAlias('default', 'layouts/default.njk');
  eleventyConfig.addLayoutAlias('home', 'layouts/home.njk');
  eleventyConfig.addLayoutAlias('micropubpost', 'layouts/micropubpost.njk');
  eleventyConfig.addLayoutAlias('page', 'layouts/page.njk');
  eleventyConfig.addLayoutAlias('post', 'layouts/post.njk');
  eleventyConfig.addLayoutAlias('rsvp', 'layouts/rsvp.njk');
  eleventyConfig.addLayoutAlias('archive', 'layouts/archive.njk');
  eleventyConfig.addLayoutAlias('all', 'layouts/all.njk');

  // passthrough stuff
  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.addPassthroughCopy('src/media');


  //plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // This blog was originally a wordpress that was then converted to jekyll and now to 11ty. 
  // So when it was converted from wordpress, I didn't think too much about the permalinks
  // This filter had to be created because of that legacy in the naming of the files of the posts.
  eleventyConfig.addFilter("post_permalink", page => {
    return `${page.fileSlug}/`;
  });

  eleventyConfig.addFilter("prettyDate", value => {
    let newDate = moment(value).format('Do MMMM YYYY');
    return newDate;
  });

  eleventyConfig.addFilter("time", value => {
    let newDate = moment(value).format('YYYY-MM-DD');
    return newDate;
  });

  eleventyConfig.addFilter("indexPaginationPermalink", value => {

    const indexPaginationPermalink = (pageNumber) => pageNumber ? `/page/${pageNumber + 1}/` : "/";

    return indexPaginationPermalink;
  });

  // I prefer to see things from "newest to oldest". So .reverse() does that.
  eleventyConfig.addCollection("mainFeed", function(collection) {
    return collection.getAllSorted().reverse();
  });

  eleventyConfig.addCollection("bookmarks" , function(collection) {
    var postCollection = collection.getFilteredByTag("Bookmarks");
    return postCollection.reverse();
  });
  
  eleventyConfig.addCollection("posts" , function(collection) {
    var postCollection = collection.getFilteredByTag("post");
    return postCollection.reverse();
  });

  eleventyConfig.addCollection("jots" , function(collection) {
    var postCollection = collection.getFilteredByTag("jot");
    return postCollection.reverse();
  });

  eleventyConfig.addCollection("pixels" , function(collection) {
    var postCollection = collection.getFilteredByTag("pixels");
    return postCollection.reverse();
  });

  eleventyConfig.addPlugin(syntaxHighlight);

  return {
    dir: {
      input: "src",
      output: "site"
    },
    passthroughFileCopy: true
  };
};
