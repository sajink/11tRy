module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ './src/_static/': '/' });
    return {
        dir: {
          input: 'src',
          output: 'public',
          data: './_data',
          includes: './_includes',
          layouts: './_layouts'
        },
        templateFormats: [
          'md',
          'njk'
        ],
        htmlTemplateEngine: 'njk'
      };
};