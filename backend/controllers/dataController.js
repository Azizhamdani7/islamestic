const asyncHandler = require("express-async-handler");
const Mood = require("../models/mood");

//Post data
const addData = asyncHandler(async (req, res) => {
  const {
    mood_name,
    ayat,
    Ayat_English,
    Ayat_Meaning,
    Ayat_Validity,
    mood_image,
  } = req.body;

  // Validation
  if (!mood_name || !ayat || !Ayat_English || !Ayat_Meaning || !Ayat_Validity) {
    res.status(400).json({ message: "All fields are required" });
    return;
  }

  try {
    let mood = await Mood.findOne({ mood_name });

    if (!mood) {
      mood = new Mood({ mood_name });
      if (mood_image) {
        mood.mood_image = mood_image;
      }
    }

    mood.data.push({ ayat, Ayat_English, Ayat_Meaning, Ayat_Validity });
    await mood.save();

    res.status(201).json({ message: "Data saved successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save data" });
  }
});

//get all data
const getAllData = asyncHandler(async (req, res) => {
  const data = await Mood.find({});
  res.status(200).json(data);
});

module.exports = {
  addData,
  getAllData,
};