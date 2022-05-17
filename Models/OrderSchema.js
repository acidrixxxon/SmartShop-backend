import mongoose from 'mongoose'


const OrderSchema = new mongoose.Schema({
    itemsCount: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    items: {
        type: [],
        required: true
    },
    client: {
        email: String,
        firstName: String,
        secondName: String,
        phone: String,
        notcallback: Boolean
    }
},{
    versionKey: false
})



export default mongoose.model('Order', OrderSchema)