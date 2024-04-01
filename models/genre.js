const mongoose = require('mongoose')

const Schema = mongoose.Schema

const GenreSchema = new Schema({
    name : {
        type : String,
        minLength : 3,
        maxLength : 100,
    }
    // bookInstance : { type: Schema.Types.ObjectId, ref: "BookInstance", required: true }
})

GenreSchema.virtual('url').get(function(){
    return `/catalog/genre/${this._id}`
})

module.exports = mongoose.model('genre', GenreSchema)