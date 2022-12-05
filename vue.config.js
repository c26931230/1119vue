const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/1119vue/'
    : '/'
})



// git push -f https://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@github.com/c26931230

// git push -f https://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
// @github.com/c26931230/production-sub-path.git master:gh-pages
