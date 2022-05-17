import express from 'express'
import ProductCtrl from '../Controllers/ProductController.js'
import UserController from '../Controllers/UserController.js'

const router = express.Router()

router.post('/register',UserController.register)
router.post('/login',UserController.login)

export default router