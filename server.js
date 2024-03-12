const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const path = require("path");
const menuRoutes = require("./routes/menuRoutes");

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

app.use(cors());
app.use(express.json());
app.use("/", menuRoutes);

app.use(express.static(path.join(__dirname, "./zano")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./zano", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
