module.exports = function(eleventyConfig) {

  eleventyConfig.addLayoutAlias('bookmarks', 'layouts/bookmarks.njk');
  eleventyConfig.addLayoutAlias('bookmarktagpage', 'layouts/bookmarktagpage.njk');
  eleventyConfig.addLayoutAlias('default', 'layouts/default.njk');
  eleventyConfig.addLayoutAlias('home', 'layouts/home.njk');
  eleventyConfig.addLayoutAlias('micropubpost', 'layouts/micropubpost.njk');
  eleventyConfig.addLayoutAlias('page', 'layouts/page.njk');
  eleventyConfig.addLayoutAlias('post', 'layouts/post.njk');
  eleventyConfig.addLayoutAlias('rsvp', 'layouts/rsvp.njk');

  eleventyConfig.addPassthroughCopy('src/assets');

  return {
    dir: {
      input: "src",
      output: "site"
    },
    passthroughFileCopy: true
  };
};