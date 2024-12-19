const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello World Again !" });
});
