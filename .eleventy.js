const Image = require("@11ty/eleventy-img");
const htmlmin = require("html-minifier");
const { isProd, environment } = require("./src/_data/env");

module.exports = function(eleventyConfig) {
  // Copy all static files to publish folder
  eleventyConfig.addPassthroughCopy({ './src/_static/': '/' });

  eleventyConfig.addShortcode("line", function(dir) {return '<div class="'+(dir??'h')+'line"></div>';});
  eleventyConfig.addPairedShortcode("box", function(content, classes) {return '<div class="'+(classes??'h-32')+' flex">'+content+'</div>';});

  // Minify HTML
  if(isProd) {
    eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
      if (outputPath && outputPath.endsWith(".html")) {
        let minified = htmlmin.minify(content, {
          useShortDoctype: true,
          removeComments: true,
          collapseWhitespace: true
        });
        return minified;
      }
      return content;
    });
  }

  return {
    dir: {
      input: 'src',
      output: 'public',
      data: './_data',
      includes: './_includes',
      layouts: './_layouts'
    },
    templateFormats: ['md','njk'],
    htmlTemplateEngine: 'njk'
  };
};