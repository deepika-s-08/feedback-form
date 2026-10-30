const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Default route

app.get("/", (req, res) => {
  res.send("Feedback Server Running ✅");
});

// POST route to handle feedback
app.post("/api/feedback", (req, res) => {
  const feedbackData = req.body;
  console.log("Received Feedback:", feedbackData);

  // You can save this data to a file or database here
  res.status(200).json({ message: "Feedback received successfully!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

