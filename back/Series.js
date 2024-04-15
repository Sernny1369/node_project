//const { Int32 } = require('mongodb');
const mongoose = require('mongoose');

const seriesSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  director: { type: String },
  years: { type: Number, required: true},
  nbEpisoide: { type: Number, required: true },
  imgUrl: { type: String, required: true},
});

const Series = mongoose.model('Series', seriesSchema);

module.exports = Series;

/*
{
  "title": "Game of Thrones",
  "description":"A Game of Thrones takes place over the course of one year on or near the fictional continent of Westeros. The story begins when King Robert visits the northern castle Winterfell to ask Ned Stark to be his right-hand assistant, or Hand of the King. The previous Hand, Jon Arryn, died under suspicious circumstances. Robert comes with his queen, Cersei Lannister, and his retinue, which includes a number of Lannisters. Just after the royal party arrives, Ned’s wife, Catelyn, receives a message claiming that the Lannister family was responsible for the death of the former Hand. She tells Ned, who accepts the position as Hand in order to protect Robert from the Lannisters. Ned’s son Bran then discovers Cersei Lannister and her brother Jaime Lannister having sex, and Jaime pushes Bran from a window to silence him. Everyone thinks Bran simply fell while climbing around the castle. While Bran is still unconscious, Ned leaves Winterfell and rides south with Robert",
  "director": "",
  "years":  2011,
  "nbEpisoide": 73,
  "imgUrl": "https://"
}
*/