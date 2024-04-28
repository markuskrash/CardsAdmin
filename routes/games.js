const gamesRouter = require("express").Router();
const {readData, writeData} = require("../utils/data");
const {
    getAllGames,
    deleteGame,
    checkIsTitleInArray,
    findGameById,
    updateGamesArray,
    updateGamesFile
} = require("../middlewares/games");
const {sendAllGames, sendUpdatedGames} = require("../controllers/games")

gamesRouter.get("/games", getAllGames, sendAllGames);
gamesRouter.post("/games", getAllGames,checkIsTitleInArray, updateGamesArray, updateGamesFile, sendUpdatedGames);
gamesRouter.delete("/games/:id", getAllGames, findGameById, deleteGame, updateGamesFile, sendUpdatedGames);


module.exports = gamesRouter;