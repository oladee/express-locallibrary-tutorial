const mongoose = require('mongoose')
const { DateTime } = require("luxon");
const Schema = mongoose.Schema


const AuthorSchema = new Schema({
    first_name : {type : String, required : true, maxLength : 100},
    family_name : {type : String, required : true, maxLength : 100},
    date_of_birth : {type : Date, default : Date.now()},
    date_of_death : {type : Date}
})

AuthorSchema.virtual('name').get(function (){
    let fullname =  ''

    if(this.first_name &&  this.family_name){
        fullname = `${this.first_name}, ${this.family_name}`
    }
    return fullname
})

AuthorSchema.virtual('url').get(function (){
    return `/catalog/author/${this._id}`
})

module.exports = mongoose.model('author', AuthorSchema)