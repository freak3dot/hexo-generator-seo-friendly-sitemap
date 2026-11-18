# hexo-generator-seo-friendly-sitemap

> **Maintained fork.** The original package stopped at 0.2.1 (2020) pinned to ejs 2.6.1, which carries critical
> advisories and cannot be upgraded in place because ejs 3 dropped the legacy `<% include %>` syntax its templates used.
> 0.3.0 moves the templates to ejs 3 includes and current dependencies with byte-identical output.
> Install from GitHub: `npm install github:freak3dot/hexo-generator-seo-friendly-sitemap#v0.3.0`


[![Build Status][travis-image]][travis-url]
[![Dependency Status][daviddm-url]][daviddm-image]
[![Code Climate](https://codeclimate.com/github/ludoviclefevre/hexo-generator-seo-friendly-sitemap/badges/gpa.svg)](https://codeclimate.com/github/ludoviclefevre/hexo-generator-seo-friendly-sitemap)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/afb430e84ace4295acb02b9f7e70566b)](https://www.codacy.com/app/contact_18/hexo-generator-seo-friendly-sitemap?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=ludoviclefevre/hexo-generator-seo-friendly-sitemap&amp;utm_campaign=Badge_Grade)

Generate SEO-friendly sitemap.

Inspired by XML Sitemap in Yoast Wordpress SEO Plugin (https://yoast.com).

It will generate separated sitemap files for pages, posts, categories, tags and a XSL stylesheet.

## Install

``` bash
$ npm install hexo-generator-seo-friendly-sitemap --save
```

## Options

You can configure this plugin in `_config.yml`.

``` yaml
sitemap:
    path: sitemap.xml
```

You can exclude tag or category page from the sitemap by adding `tag: false` or `category: false` under the `sitemap` configuration.

``` yaml
sitemap:
    path: sitemap.xml
    tag: false
    category: false
```

- **path** - Index sitemap path.

## Excluding pages or posts

You can exclude pages or posts from the sitemap by adding `sitemap: false` to the relevant front-matter.

## License

MIT © [Ludovic LEFEVRE](http://www.ludoviclefevre.fr)


[coveralls-image]: https://coveralls.io/repos/ludoviclefevre/hexo-generator-seo-friendly-sitemap/badge.svg
[coveralls-url]: https://coveralls.io/r/ludoviclefevre/hexo-generator-seo-friendly-sitemap?branch=master
[travis-url]: https://travis-ci.org/ludoviclefevre/hexo-generator-seo-friendly-sitemap
[travis-image]: https://travis-ci.org/ludoviclefevre/hexo-generator-seo-friendly-sitemap.svg?branch=master
[daviddm-url]: https://david-dm.org/ludoviclefevre/hexo-generator-seo-friendly-sitemap.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/ludoviclefevre/hexo-generator-seo-friendly-sitemap
