const mongoose = require('mongoose')

const schema = mongoose.Schema


const authorSchema = new schema({
    firstName : {type : String, required : true, maxLength : 100},
    familyName : {type : String, required : true, maxLength : 100},
    dateOfBirth : {type : Date, default : Date.now()},
    dateOfDeath : {type : Date}
})

authorSchema.virtual('name').get(function (){
    let fullname =  ''

    if(this.firstName &&  this.familyName){
        fullname = `${this.firstName}, ${this.familyName}`
    }
    return fullname
})

authorSchema.virtual('url').get(function (){
    return `/catalog/author/${this._id}`
})