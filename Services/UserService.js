import User from "../Models/UserSchema.js"
import bcrypt from 'bcrypt'


class UserService {

    async createUser(user) {
        try {
            const newUser = await User.create(user)

            return newUser
        } catch (error) {
            console.log(error.message)  
            throw new Error(error.message)
        }
    }

    async login({ email,password }) {
        try {
            const existUser = await User.findOne({email})
            if (!existUser) throw new Error('Пользователь не найден')

            const comparePassword = await bcrypt.compare(password,existUser.password)
            if (!comparePassword) throw new Error('Не правильный пароль')

            const user = await User.findOne({email}).select('-password')
            return user
        } catch (error) {
            console.log(error.message)
            throw new Error(error.message)
        }
    }
}


export default new UserService()