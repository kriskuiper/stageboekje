const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')

const use404 = require('./utils/use-404')
const minifyHtml = require('./utils/minify-html')

module.exports = (eleventyConfig) => {
  eleventyConfig.addLayoutAlias('default', 'layouts/default.html')

  eleventyConfig.setBrowserSyncConfig(use404)

  eleventyConfig.addPassthroughCopy({ 'src/static/styles': 'styles' })
  eleventyConfig.addPassthroughCopy({ 'src/static/fonts': 'fonts' })

  eleventyConfig.addTransform('htmlmin', minifyHtml)

  eleventyConfig.addPlugin(syntaxHighlight)

  return {
    dir: {
      input: "src",
      data: "_data",
      includes: "_includes",
      output: "_site"
    },
    templateFormats: ["html", "md", "11ty.js"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true
  }
}
