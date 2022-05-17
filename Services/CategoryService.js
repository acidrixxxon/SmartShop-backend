import Category from "../Models/CategorySchema.js"


class CategoryService {

    async getAll() {
        try {
            const categories = await Category.find({})

            if (categories.length === 0) return {
                success: true,
                message: 'Категорий пока нет',
                categories: []
            }

            return {
                success: true,
                message: 'Список категорий получен',
                categories
            }
        } catch (error) {
            console.error(error.message)
            return error.message
        }
    }

    async create(name) {
        try {
            const newCategory = await Category.create({name})

            return {
                success: true,
                message: `Категория ${name} создана успешно`,
                newCategory
            }
        } catch (error) {
            console.error(error.message)
            return error.message
        }
    }
}


export default new CategoryService()