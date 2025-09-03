import express from "express";

const app = express();

app.get("/", (req, res) => {
  // Include the "res" parameter here
  res.send("The server is readyyyyyyy");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`The server is ready and is serving on http://localhost:${port}`);
});
