const bcrypt = require('bcryptjs')
var session_id_count = 1

module.exports = {
    register: (req, res, next) => {
        const { username, password } = req.body
        const db = req.app.get('db')
        db.check_username([username]).then( user => {
           
            if (user.length !== 0) {
                console.log('Please choose a different username.')
                res.status(200).send('Username taken. Please try another.')
                
                
            } else {
                const salt = bcrypt.genSaltSync(10)
                const hash = bcrypt.hashSync(password, salt)

                db.register_user([username, hash]).then( user => {
                    req.session.user.session_id = session_id_count
                    session_id_count ++
                    req.session.user.user_id = user[0].user_id
                    req.session.user.username = user[0].username
                    // console.log(req.session)
                    res.status(200).send('Registration Successful')
                }).catch(500)
            }
        }).catch(500)
    },
    login: (req, res, next) => {
        const { username, password } = req.body
        const db = req.app.get('db')
        db.check_username([username]).then( user => {
            if(user.length !== 0) {
                const validPassword = bcrypt.compareSync(password, user[0].user_password)
                if (validPassword) {
                    req.session.user.session_id = session_id_count
                    session_id_count ++
                    req.session.user.user_id = user[0].user_id
                    req.session.user.username = user[0].username
                    res.status(200).send()
                    console.log(req.session)
                } else {
                    console.log('wrong password')
                    res.status(200).send('Invalid Password')
                }
            } else {
                console.log('wrong username')
                res.status(200).send('Username does not Exist')
            }
        })
    },
    userValidate: (req, res, next) => {
       if (req.session.user.user_id) {
            res.status(200).send()
        } else {
            res.status(500).send()
        }
    },
    logout: (req, res, next) => {
        req.session.destroy()
        res.status(200).send()
        console.log(req.session)
    }
}