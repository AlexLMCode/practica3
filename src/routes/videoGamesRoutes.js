const express = require("express");

const videoGamesSchema = require("../models/videoGameModel");
const videoGamesRoutes = express.Router();

videoGamesRoutes.get("/", (req, res) => {
  videoGamesSchema
    .find()
    .then((data) => res.json({ Data: data }))
    .catch((err) => res.json({ Error: err }));
});

videoGamesRoutes.post("/", (req, res) => {
  const videoGame = videoGamesSchema(req.body);

  videoGame
    .save()
    .then((data) => res.json({ Creado: data }))
    .catch((err) => res.json({ Error: err }));
});

videoGamesRoutes.get("/:id", (req, res) => {
  videoGamesSchema
    .findById(req.params.id)
    .then((data) => res.json({ Data: data }))
    .catch((err) => res.json({ Error: err }));
});

videoGamesRoutes.put("/:id", (req, res) => {
  const videoGameId = req.params.id;
  const {
    title,
    multiplayer,
    numberOfPlayers,
    language,
    developer,
    genre,
    releaseDate,
  } = req.body;

  videoGamesSchema
    .updateOne(
      { _id: videoGameId },
      {
        $set: {
          title,
          multiplayer,
          numberOfPlayers,
          language,
          developer,
          genre,
          releaseDate,
        },
      }
    )
    .then((data) => res.json({ Updated: data }))
    .catch((err) => res.json({ Error: err }));
});

videoGamesRoutes.delete("/:id", (req, res) => {
  const videoGameId = req.params.id;

  videoGamesSchema
    .deleteOne({ _id: videoGameId })
    .then((data) => res.json({ Deleted: data }))
    .catch((err) => res.json({ Error: err }));
});

module.exports = videoGamesRoutes;
