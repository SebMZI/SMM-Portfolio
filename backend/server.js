require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Connect = require("./config/dbConn");
const cors = require("cors");
const app = express();
const { logger, logEvents } = require("./middlewares/logEvents");
const verifyJWT = require("./middlewares/verifyJWT");
const corsOptions = require("./config/corsOptions");
const errorHadnler = require("./middlewares/errorHandler");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 3500;

// Database connection
Connect();
// Log requests
app.use(logger);
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/register", require("./routes/register"));
app.use("/signin", require("./routes/auth"));
app.use("/refresh", require("./routes/refresh"));

// Logged to have access to projects
app.use(verifyJWT);
app.use("/projects", require("./routes/project"));

// Error: Not found
app.use("*", (req, res) => {
  res.status(404).send("404 Not found");
});

app.use(errorHadnler);

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () =>
    console.log(`Server is listening on http://localhost:${PORT}`)
  );
});
