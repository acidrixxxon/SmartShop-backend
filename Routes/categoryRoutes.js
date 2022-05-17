import express from 'express'
import CategoryCtrl from '../Controllers/CategoryController.js'

const router = express.Router()

router.post('/create',CategoryCtrl.createCategory)
router.get('/all',CategoryCtrl.getAll)


export default router