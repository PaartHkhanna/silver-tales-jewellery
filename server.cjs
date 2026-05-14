const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const FILE = "./storage/data.json";

// CREATE FILE IF NOT EXISTS
if (!fs.existsSync(FILE)) {
  fs.writeFileSync(FILE, "[]");
}

// =============================
// SAVE DATA
// =============================
app.post("/save", (req, res) => {
  try {
    const newData = req.body;

    // READ EXISTING DATA
    const rawData = fs.readFileSync(FILE, "utf8");

    let data = [];

    try {
      data = JSON.parse(rawData);
    } catch {
      data = [];
    }

    // PUSH NEW DATA
    data.push(newData);

    // SAVE
    fs.writeFileSync(FILE, JSON.stringify(data, null, 2));

    console.log("Saved:", newData);

    res.status(200).json({
      success: true,
      message: "Saved successfully",
    });

  } catch (err) {
    console.error("Save Error:", err);

    res.status(500).json({
      success: false,
      error: "Failed to save data",
    });
  }
});

// =============================
// GET ALL DATA
// =============================
app.get("/", (req, res) => {
  try {
    const rawData = fs.readFileSync(FILE, "utf8");

    let data = [];

    try {
      data = JSON.parse(rawData);
    } catch {
      data = [];
    }

    res.json(data);

  } catch (err) {
    console.error("Read Error:", err);

    res.status(500).json({
      error: "Failed to read data",
    });
  }
});

// =============================
app.listen(5000, () => {
  console.log("Server running on port 5000");
});