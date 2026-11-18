const path = require('path'),
  Promise = require('bluebird'),
  ejs = require('ejs'),
  beautify = require('pretty-data').pd,
  common = require('./common'),
  url = require('url')

/**
 * Percent-encode a URL for a sitemap <loc>. It was a template-scoped global defined by a legacy
 * ejs 2 include; ejs 3 includes no longer share scope, so it is passed to every template as a local.
 * The replacements are deliberately first-occurrence only, matching the original output byte for byte.
 */
const encodeURLAndEscape = function(url) {
  return encodeURI(url)
    .replace(/&/, '%26')
    .replace(/</, '%3C')
    .replace(/>/, '%3E')
    .replace(/'/, '%27')
    .replace(/"/, '%22')
}

const render = function(locals, config) {
  const viewPath = path.join(__dirname, '..', 'views')

  const getCompiledContent = function(info, templateFilePath, templateContent) {
    const compiledTemplate = ejs.compile(templateContent, {
        filename: templateFilePath
      }),
      xml = compiledTemplate({
        config: config,
        data: info.data,
        url: url,
        encodeURLAndEscape: encodeURLAndEscape
      })

    if (config.sitemap.beautify) {
      xml = beautify.xml(xml)
    }

    return {
      path: info.filename,
      data: xml
    }
  }

  const renderSitemaps = function(sitemap) {
    if (!sitemap.template) return
    const templateFilePath = path.join(viewPath, sitemap.template)
    return Promise.join(sitemap, templateFilePath, common.getFileContent(templateFilePath), getCompiledContent)
  }

  return renderSitemaps
}

module.exports = render
