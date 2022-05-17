import mongoose from 'mongoose'


const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 4
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        default: 0
    },
    img: {
        type: [String],
        required: true
    },
    description: {
        type: String,
        required: true,
        minlength: 10
    },
    characteristics: {
        type: [Object],
        required: true
    },
    new: {
        type: Boolean,
        default: true
    },
    hitOfSales: {
        type: Boolean,
        default: false
    },
    category: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Category'
    },
    comments: {
        type: [Object],
        default: []
    }
},{
    versionKey: false,
})



export default mongoose.model('Product', ProductSchema)


