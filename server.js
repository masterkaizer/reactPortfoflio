const express = require("express");
var cors = require('cors')
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");
const PORT = process.env.PORT || 3008;

const app = express();

app.use(cors())

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(express.static("client/build"));


// Send every request to the React app
// Define any API routes before this runs

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false,
   useUnifiedTopology: true
});

// routes here
app.use(require("src/components/routes/routes.jsx"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});