const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "client/build")));

app.use(
  "/storybook",
  express.static(path.join(__dirname, "client/storybook-static"))
);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
