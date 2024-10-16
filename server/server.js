const express = require("express");
const userRouter = require("./routes/userRoutes.js");
// Connection to DB
const connect = require("./database/db.js");

// Init app
const app = express();

// Middlewares
app.use(express.json());
//localhost:5000/user/create
app.use("/user", userRouter);

// Running the server
const PORT = 5000;

app.listen(PORT, (err) => {
  if (err) console.log(err);

  console.log(`Server running on port ${PORT}`);
});
