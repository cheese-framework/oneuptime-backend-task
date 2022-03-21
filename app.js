require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const authRouter = require("./app/routes/auth");
const patchRouter = require("./app/routes/patch");

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.use("/api/auth", authRouter);
app.use("/api", patchRouter);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to app" });
});

app.listen(5000, () => console.log("App running on port 5000"));
