const express = require("express")
const app = express()
const path = require("path")

//Any additional routes go here

if (process.env.NODE_ENV != "production") {
  const webpackMiddleware = require("webpack-dev-middleware")
  const webpack = require("webpack")
  const webpackConfig = require("./webpack.config")
  //Webpack middleware configuration
  app.use(webpackMiddleware(webpack(webpackConfig)))
} else {
  //'dist' is the static folder
  app.use(express.static("dist"))
  // Send index.html for any route (Specific for react router and browser history)
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist/index.html"))
  })
}

app.listen(process.env.PORT || 3050, () => {
  console.log("Express is running on http://localhost:3050")
})
