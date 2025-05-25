const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const routes = require("./routes");

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("YakBuilder API is live!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
