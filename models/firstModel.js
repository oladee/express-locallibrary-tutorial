

const validSchema = new schema({
    name: String,
    Date : {type : Date, default : Date.now()}
})

module.exports = mongoose.model('valid', validSchema)