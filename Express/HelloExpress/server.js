const express = require("express");
const app = express();
const port = 8000;

// allow server to recieve .json (when someone makes a post route)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send("Our express api server is now sending this over to the browser");
});

const apiCallBack = (req, res) => {
  res.json({
    message: "Hello world",
    secretNumber: 42,
    instructurNames: ["max", "Robert"],
    myUser: {
      name: "Max R",
      job: "Instructor",
      hairColor: "brown",
      classesTaught: ["Python", "Mern", "C#"]
    }
  });
}

app.get("/goat", apiCallBack);

// how to get form data
app.post("/api/users", (req, res) => {
  // req.body will contain the form data from Postman or from React
  console.log(req.body);
  // we can push it into the users array for now...
  // later on this will be inserted into a database
  users.push(req.body);
  // we always need to respond with something
  res.json({ status: "ok" });
});

// this needs to be below (the app.(somewthing) code blocks)the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));

// const server = app.listen(8000, () =>
//   console.log(`Server is locked and loaded on port ${server.address().port}!`)
// );
