const gamesRouter = require("express").Router();
const { readData, writeData } = require("../utils/data");
const {sendAllGames, addGameController, deleteGame} = require("../controllers/games")
const {getAllGames} = require("../middlewares/games");


gamesRouter.get("/games", getAllGames, sendAllGames);
gamesRouter.post("/games", getAllGames, addGameController);
gamesRouter.delete("/games/:id", getAllGames, deleteGame);


module.exports = gamesRouter;