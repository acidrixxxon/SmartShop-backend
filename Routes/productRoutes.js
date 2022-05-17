import express from 'express'
import ProductCtrl from '../Controllers/ProductController.js'

const router = express.Router()

router.post('/create',ProductCtrl.createProduct)
router.get('/all',ProductCtrl.getAll)
router.get('/:id',ProductCtrl.getProductById)

export default router