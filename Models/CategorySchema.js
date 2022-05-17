import mongoose from 'mongoose'


const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        minlength: 4
    }
},{
    versionKey: false
})



export default mongoose.model('Category', CategorySchema)