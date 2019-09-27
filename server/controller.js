const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res, next) => {
        const db = req.app.get('db')
        const {username, password} = req.body
        const user = await db.find_user([username])
        if (user[0]) return res.status(200).send({message: 'Username already in use'})

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        let profile_pic = `https://robohash.org/${username}.png`
        const newUser = await db.create_user([username, hash, profile_pic])

        req.session.userid = newUser[0].id
        
        res.status(201).send(newUser[0])
    },
    login: async (req, res, next) => {
        const db = req.app.get('db')
        const {username, password} = req.body
        const user = await db.find_user([username])
        if (!user[0]) return res.status(200).send({message: 'Incorrect username'})
        const result = bcrypt.compareSync(password, user[0].password)
        if (!result) return res.status(200).send({message: 'password incorrect'})
        req.session.userid = user[0].id
        res.status(200).send(user[0])
    },
    logout: async (req, res, next) => {
        req.session.destroy()
        res.sendStatus(200)
    },

    getPosts: async (req, res, next) => {
        const db = req.app.get('db')
        const {userid} = req.session
        const {userposts, search} = req.query
        const result = await db.get_posts()
        if (userposts === 'true' && search !== ''){
            const filteredResult = result.filter(el => el.title.includes(search))
            res.status(200).send(filteredResult)
        } else if (userposts === 'false' && search === '') {
            const filteredResult = result.filter(el => el.user_id !== +userid)
            res.status(200).send(filteredResult)
        } else if (userposts === 'false' && search !== '') {
            const filteredResult = result.filter(el => el.user_id !== +userid)
            const filteredSearch = filteredResult.filter(el => el.title.includes(search))
            res.status(200).send(filteredSearch)
        } else if (userposts === 'true' && search === '') {
            res.status(200).send(result)
        } else {
            console.log('nothing hit')
        }
    },
}

