import CategoryService from "../Services/CategoryService.js"


class CategoryController {

    createCategory = async (req,res) => {
        const { name } = req.body

        const newCategory = await CategoryService.create(name)

        return res.status(200).json(newCategory)
    }

    getAll = async (req,res) => {
        const categories = await CategoryService.getAll()

        return res.status(200).json(categories)
    }
}


export default new CategoryController()