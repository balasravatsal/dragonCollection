const express = require('express')
const GenerationEngine = require('./generation/engine')
const dragonRouter = require('./api/dragon')
const generationRouter = require('./api/generation')

const app= express()
const engine = new GenerationEngine()

app.locals.engine = engine

app.use('/dragon', dragonRouter)
app.use('/generation', generationRouter)

engine.start()

module.exports = app















































//////////////////////////////////////////////////////////////////////////////
// const Generation = require('./generation')
//
// const generation = new Generation()
// console.log(generation)
// const d1 = generation.newDragon()
// console.log(d1)
//
// setTimeout(() => {
//     const d2 = generation.newDragon({nickname: 'd2'})
//     console.log(d2)
// }, 2000)
//
























///////////////////////////////////////////////////////

// const Dragon = require('./dragon')
//
// const dragonite = new Dragon({birthdate: new Date(), nickname: 'dragonite'});
// const charizard = new Dragon({nickname: 'charizard'})
//
// setTimeout(()=>{
//     const d1 = new Dragon()
//     console.log(d1)
// }, 3000)
//
// console.log(dragonite)
// console.log(charizard)
//
//
