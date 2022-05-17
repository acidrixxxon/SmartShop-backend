import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import categoryRouter from './Routes/categoryRoutes.js'
import productRouter from './Routes/productRoutes.js'
import userRouter from './Routes/userRoutes.js'
import orderRouter from './Routes/orderRoutes.js'

import dotenv from 'dotenv'
dotenv.config()

const app = express()


app.use(cors())
app.use(express.json())
app.use('/category',categoryRouter)
app.use('/product',productRouter)
app.use('/user',userRouter)
app.use('/order',orderRouter)

app.get('*',(req,res) => {
    return res.status(404).json({
        message: 'Запрос на несуществующий url'
    })
})

app.listen(3000,() => {
    try {
        mongoose.connect('mongodb+srv://Zen:123@cluster0.wozk2.mongodb.net/smartshop')
            .then(() => console.log('connected to DB'))
            .catch((error) => console.log('Error connect to DB',error.message))
        console.log('Server has been started!')
    } catch (error) {
        throw new Error(error)
    }
})