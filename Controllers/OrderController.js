import OrderService from "../Services/OrderService.js"




class OrderController {

    async create(req,res) {
        const { itemsCount,totalPrice,items,client } = req.body

        if ( !itemsCount || !totalPrice || !items || !client) {
            return res.status(500).json({
                success: false,
                message: 'Отсутствуют данные!'
            })
        }

        const orderDto = {
            itemsCount,
            totalPrice,
            items,
            client
        }

        const newOrder = await OrderService.create(orderDto)

        if (newOrder) return res.status(200).json({
            success: true,
            order: newOrder,
            message: 'Заказ успешно оформлен!'
        })
    }
}


export default new OrderController()