import Product from "../Models/ProductSchema.js"




class ProductService {

    async getAllProducts() {
        try {
            const products = await Product.find({}).populate({path: 'category',select: '-__v'})

            if (products.length === 0) return {
                    success: true,
                    message: 'Cписок товаров пуст',
                    products: []
            }

            return {
                success: true,
                message: 'Товары получены',
                products
            }
        } catch (error) {
            console.error(error.message)
            return error.message
        }
    }

    async getProductById(id) {
        try {
            const product = await Product.find({_id: id})

            if (product.length === 0) return {
                success: false,
                message: 'Товар не найден'
            }

            return {
                success: true,
                message: 'Товар найден!',
                product: product[0]
            }
        } catch (error) {
            console.error(error.message)
            return error.message
        }
    }

    async createProduct(product) {
        try {
            const newProduct = await Product.create(product)

            return {
                success: true,
                message: 'Продукт успешно создан',
                newProduct
            }
        } catch (error) {
            console.error(error.message)
            return error.message
        }
    }
}


export default new ProductService()