const express = require("express");
const Posts = require("./models/models.js")

const PORT = 2000;
const app = express();

async function pull() {
    const data = await Posts.getAll();
    console.log(data[0].title)
    return data;
}

console.log(pull())

app.get("/hello", (req, res) => {
    res.json(pull()).status(200);
  });

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${2000}`);
});
