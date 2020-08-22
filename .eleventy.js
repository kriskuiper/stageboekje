const use404 = require('./lib/use-404')

module.exports = (eleventyConfig) => {
  eleventyConfig.addLayoutAlias('default', 'layouts/default.html')
  eleventyConfig.setBrowserSyncConfig(use404)

  eleventyConfig.addPassthroughCopy({ 'src/static/styles': 'styles' })
  eleventyConfig.addPassthroughCopy({ 'src/static/fonts': 'fonts' })

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
