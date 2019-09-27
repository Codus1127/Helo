module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db');
        const { username, password } = req.body;
        console.log(req.body);
        const newUser = await db.create_account([username, password]);
        req.session.user = newUser
        console.log(req.session)

        res.status(201).send(newUser);
    }
}

