const express = require("express");
const moviesRouter = require("./routes/movieRoutes");
const usersRouter = require("./routes/userRoutes");

const port = 3000;
const app = express();

app.use("/users", usersRouter);
app.use("/movies", moviesRouter);

app.listen(port, (req, res) => {
  console.log(`App running on port ${port}`);
});
