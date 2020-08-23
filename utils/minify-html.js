const htmlMinifier = require('html-minifier')

/**
 * @description Minifies HTML output files before build
 * @param {*} content The content of the specific HTML file
 * @param {*} outputPath The name of the outputted path where the HTML file is placed in
 * @returns {*} The minified HTML if the file is HTML, else returns original content
 */
module.exports = (content, outputPath) => {
  if (outputPath.endsWith('.html')) {
    const minified = htmlMinifier.minify(content, {
      useShortDoctype: true,
      removeComments: true,
      collapseWhiteSpace: true
    })

    return minified
  }

  return content
}
