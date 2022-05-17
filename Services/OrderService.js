import Order from "../Models/OrderSchema.js"




class OrderService {

    async create(order) {
        try {
            const newOrder = await Order.create(order)

            return newOrder
        } catch (error) {
            console.error(error.message)
            return error.message
        }
    }
}


export default new OrderService()