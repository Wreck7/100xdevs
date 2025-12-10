const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is hello!");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port http://127.0.0.1:${PORT}`));
