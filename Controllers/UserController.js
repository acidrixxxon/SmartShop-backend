import UserService from "../Services/UserService.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'



class UserController {

    async register(req,res) {
        const { email,password,username,phone } = req.body

        if (!email || !password || !username || !phone) {
            return res.status(500).json({
                message: 'Отсутствуют данные!',
                success: false
            })
        }

        const hashedPassword = await bcrypt.hash(password,3)

        const userDto = {
            email,phone,username,
            password: hashedPassword
        }
        
        const user = await UserService.createUser(userDto) 
        
        if (user) return res.status(200).json({
           success: true,
           message: 'Пользователь зарегестрирован',
           user
        })
    }

    async login(req,res) {
        try {
            const { email,password } = req.body

            if ( !email ||  !password ) return res.status(500).json({
                success: false,
                message: 'Вы не ввели данные'
            })
    
            const user = await UserService.login({email,password})
            const token = jwt.sign({payload: user._id}, process.env.SECRET_KEY,{ expiresIn: '12h'})
    
            if (user) return res.status(200).json({
                success: true,
                message: 'Авторизация успешна',
                user,
                access_token: token
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message
            })
        }
    }
}


export default new UserController()