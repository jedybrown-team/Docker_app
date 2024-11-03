const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json([
    {
      id: "1",
      title: "Book Review: The Bear & The Nightingale",
    },
    {
      id: "2",
      title: "Game Review: Pokemon Brillian Diamond",
    },
    {
      id: "3",
      title: "Show Review: Alice in Borderland",
    },
  ]);
});

app.get("/favicon.ico", (req, res) => res.status(204)); // No content response

app.listen(4000, () => {
  console.log("Server listening for requests on port 4000");
});
