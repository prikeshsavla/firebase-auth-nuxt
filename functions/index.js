
const functions = require("firebase-functions");
const { Nuxt } = require("nuxt");
const express = require("express");

const app = express();

const config = {
  dev: false,
  buildDir: "nuxt",
  build: {
    publicPath: "/",
  },
};
const nuxt = new Nuxt(config);

 function handleRequest(req, res) {
  console.log(req.path);
  res.set("Cache-Control", "public, max-age=150, s-maxage=300");
   nuxt .renderRoute(req.path, {req: req, res:res})
    .then((result) => {
       res.send(result.html);
    })
    .catch((e) => {
      res.send(e);
    });
}
// app.use(nuxt.render);

app.get("**", handleRequest);

exports.ssrapp = functions.https.onRequest(app);