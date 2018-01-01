const express = require("express")
const webpackMiddleware = require("webpack-dev-middleware")
const webpack = require("webpack")
const webpackConfig = require("./webpack.config")
const app = express()

//Webpack middleware configuration
app.use(webpackMiddleware(webpack(webpackConfig)))

app.listen(3050, () => {
  console.log("Express is running on http://localhost:3050")
})
