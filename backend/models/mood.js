const mongoose = require('mongoose');

const ayatSchema = new mongoose.Schema({
  ayat: {
    type: String,
    required: true,
  },
  Ayat_English: {
    type: String,
    required: true,
  },
  Ayat_Meaning: {
    type: String,
    required: true,
  },
  Ayat_Validity: {
    type: String,
    required: true,
  },
});

const moodSchema = new mongoose.Schema({
  mood_name: {
    type: String,
    required: true,
  },
  mood_image: {
    type: String,
    required: function () {
      // 'this' refers to the document being saved/updated
      return !this.isNew; // Required for new moods only
    },
  },
  data: [ayatSchema],
});

const Mood = mongoose.model('Mood', moodSchema);

module.exports = Mood;
