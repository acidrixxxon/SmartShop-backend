import express from 'express'
import OrderController from '../Controllers/OrderController.js'

const router = express.Router()

router.post('/create',OrderController.create)

export default router