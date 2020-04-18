module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/portfolio/'
    : '/',
  "transpileDependencies": [
    "vuetify"
  ]
}