const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// POST /api/transform
app.post("/api/transform", (req, res) => {
  const { sentence } = req.body;

  if (!sentence || typeof sentence !== "string") {
    return res.status(400).json({ error: "Invalid input. 'sentence' is required." });
  }

  // Split the sentence into words
  const words = sentence.trim().split(/\s+/);

  // Word count
  const word_count = words.length;

  // Unique words 
  const unique_words = [...new Set(words.map(w => w.toLowerCase()))];

  // Reversed sentence
  const reversed_sentence = words.reverse().join(" ");

  res.json({
    word_count,
    unique_words,
    reversed_sentence,
  });
});


