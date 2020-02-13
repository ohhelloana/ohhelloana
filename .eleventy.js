module.exports = function(eleventyConfig) {

  eleventyConfig.addLayoutAlias('bookmarks', 'layouts/bookmarks.html');
  eleventyConfig.addLayoutAlias('bookmarktagpage', 'layouts/bookmarktagpage.html');
  eleventyConfig.addLayoutAlias('default', 'layouts/default.html');
  eleventyConfig.addLayoutAlias('home', 'layouts/home.html');
  eleventyConfig.addLayoutAlias('micropubpost', 'layouts/micropubpost.html');
  eleventyConfig.addLayoutAlias('page', 'layouts/page.html');
  eleventyConfig.addLayoutAlias('post', 'layouts/post.html');
  eleventyConfig.addLayoutAlias('rsvp', 'layouts/rsvp.html');

  eleventyConfig.addPassthroughCopy('assets');

  return {
    dir: {
      input: "src",
      output: "site",
    },
    passthroughFileCopy: true
  };
};