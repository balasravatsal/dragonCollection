const {Router} = require('express')
const DragonTable = require('../dragon/table')

const router = new Router()

router.get('/new', (req, res) => {
    const dragon = req.app.locals.engine.generation.newDragon()

    DragonTable.storeDragon(dragon)
        .then(({dragonId}) => {
            console.log('dragonId', dragonId)
            dragon.dragonId = dragonId
        })
        .catch((e) => console.log(e))
})

module.exports = router

