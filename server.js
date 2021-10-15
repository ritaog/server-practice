const express = require("express");
const { Server } = require("http");

const app = express();
const port = 3000;

app.get("/", function (req, res) {
  console.log("Hello World");
  res.send("Hello World");
});

app.get("/name", function (req, res) {
  res.send("Mahmuda");
});

app.get("/school", function (req, res) {
  res.send("InceptionU");
});

//breakout room

app.get("/clothings", function (req, res) {
  const jsonfile = [
    {
      tshirt: "👕",
      size: "large",
      price: "$20",
    },
    {
      blouse: "👚",
      size: "medium",
      price: "$28",
    },
    {
      pants: "👖",
      size: "small",
      price: "$35",
    },
  ];

  res.json(jsonfile);
});

app.listen(port, () => {
  console.log(`Server live on port ${port}`);
});
/*
const name = "Rita";
const array = ["Rita", "InceptionU"];

const object = {
  name: "Rita",
  school: "inceptionU",
};

const json = {
    "name": "Rita",
    "school": "inceptionU",
  };

console.log(name); // Rita
console.log(array[0]); //Rita
console.log(object.name); //Rita
*/
