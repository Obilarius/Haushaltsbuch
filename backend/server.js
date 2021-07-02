const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

// set up express app
const app = express();

// connect to mongoDB
const conString =
  "mongodb+srv://budgetbook:xOBPRn44mKMZnPEqjgjN@budgetbook.fbsql.mongodb.net/budgetbook?retryWrites=true&w=majority";
mongoose.connect(conString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
mongoose.Promise = global.Promise;

app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.json());

// routes
app.use("/api/", require("./routes/main"));

// routes for frontend
app.use((req, res, next) => {
  res.sendFile(__dirname + "/public/index.html");
});

// port
const port = process.env.PORT || 5000;
// listen for requests
app.listen(port, function () {
  console.log(`Server now listening on port ${port}`);
});
