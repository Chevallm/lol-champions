const express = require('express')
const fs = require('fs')

const app = express()
const router = express.Router()

app.use('/champions', router)
const championsBrut = JSON.parse(fs.readFileSync('champions.json')).data
const champions = Object.keys(championsBrut).map( (key, index) => championsBrut[key])

router.route('/')
    .get( (req, res) => {
        res.json(champions)
    })

router.route('/:id')
    .get( (req, res) => {
        res.json(champions.filter( champion => champion.id === req.params.id)[0])
    })

app.listen(process.env.PORT || 8080, () => { console.log('listening') })