const express = require("express");
const cors = require('cors');
const Posts = require("./models/models.js")

const PORT = 2000;
const app = express();

app.use(cors())

async function pull() {
    const data = await Posts.getAll();
    console.log(data.title)
    return data;
}

console.log(pull())

app.get("/posts", async function(req, res, next) {
    const all = await Posts.getAll();
    res.json(all);
  });

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
