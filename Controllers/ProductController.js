import ProductService from "../Services/ProductService.js"


class ProductController {

    createProduct = async (req,res) => {
        const result = await ProductService.createProduct(req.body)

        return res.status(200).json(result)
    }

    getAll = async (req,res) => {
        const result = await ProductService.getAllProducts()

        return res.status(200).json(result)
    }

    getProductById = async (req,res) => {
        const { id } = req.params

        const result = await ProductService.getProductById(id)

        return res.status(200).json(result)
    }
}


export default new ProductController()