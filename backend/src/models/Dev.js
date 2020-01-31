const mongoose = require('mongoose')
const PointSchema = require('./utils/PoitSchema')

const DevSchema = new mongoose.Schema({
  github_username: String,
  name: String,
  avatar_url: String,
  bio: String,
  techs: [String],
  location: {
    type: PointSchema,
    createIndexes: '2dsphere',
  }
})

module.exports = mongoose.model('Dev', DevSchema)