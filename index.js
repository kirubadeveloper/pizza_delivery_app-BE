require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const bodyparser = require("body-parser");

//mongo connection
connection();

//middleware
app.use(express.json());
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
