const express = require("express");
const { addArtist, updateArtist } = require("../controllers/artist.controller");
const route = express.Router();

route.post("/add-artist", addArtist);
route.put("/update-artist/:id", updateArtist)

module.exports = route;