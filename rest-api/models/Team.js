const mongoose = require('mongoose')

const Team = new mongoose.Schema({
  teamname:{type:String, default:''},
  Continent:{type:String, default:''}
})

module.exports = mongoose.model('Team',Team)
