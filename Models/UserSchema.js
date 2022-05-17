import mongoose from 'mongoose'


const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        minlength: 4
    },
    email: {
        type: String,
        unique: true,
        minlength: 4
    },
    phone: {
        type: String,
        unique: true,
        minlength: 10
    },
    password: String,
    orders: []
},{
    versionKey: false,
})



export default mongoose.model('User', UserSchema)


