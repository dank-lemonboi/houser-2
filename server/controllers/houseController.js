module.exports = {
    newHouse: (req, res, next) => {
        const { houseName, houseDescription, address, city, state, zip, image_url, loan_amount, monthly_mortgage, desired_rent } = req.body
        const db = req.app.get('db')
        db.create_new_house([houseName, houseDescription, address, city, state, zip, image_url, loan_amount, monthly_mortgage, desired_rent, req.session.user.user_id])
        .then( () => {
        res.status(200).send()
        })
    },
    getHouses: (req, res, next) => {
        const db = req.app.get('db')
        if(req.query) {

            db.filter_houses([+req.query.filterValue, +req.session.user.user_id]).then( houses => {
                res.status(200).send(houses)
            
            })
        } else {
            db.get_houses([+req.session.user.user_id]).then( houses => {
                // req.session.user.homes = houses
                res.status(200).send(houses)
        })
      }
    },
    delete: (req, res, nex) => {
        // console.log(req.body)
        const db = req.app.get('db')
        db.delete_home([+req.body.house_id, req.session.user.user_id]).then( houses => {
            res.status(200).send(houses)
        })
    }
}