const mongoose = require('mongoose')

const Player = new mongoose.Schema({
  firstname:{type:String, default:''},
  lastname:{type:String, default:''},
  team:{type:String, default:''}
})

module.exports = mongoose.model('Player',Player)
