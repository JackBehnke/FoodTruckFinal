const router = require('express').Router()
const foods = require('../../../data/foods.json')
const events = require('../../../data/events.json')

router.get('/events', (__, response) => {
    const event = events.map(eventItem => {
        const { id, name, location, date, time } = eventItem
        return { id, name, location, date, time }
    })
    response.send(event)
})
router.get ('/events/:id', (request, response) => {
    const { id } = request.params
    const found = events.find(event => event.id.toString() === id)
    if (found) return response.send(found)
       else {response.status(400).send({ error: `Could not find the event item ${id}`})}
})

router.post('/event', (request, response) => {
    const { id, name, location, date, time } = request.body
    const found = events.find(event => event.id.toString() === id.toString())
    if (found) response.send({ error: { message: `${name} already exists`} })
    else events.push({name, location, date, time})
})

router.get('/menu', (__, response) => {
    const menu = foods.map(menuItem => {
        const {id, name, description, price, url} = menuItem
        return {id, name, description, price, url}

    }) 
    response.send(menu)
})

router.get ('/menu/:id', (request, response) => {
    const { id } = request.params
    const found = foods.find(food => food.id.toString() === id)
    if (found) return response.send(found)
       else {response.status(400).send({ error: `Could not find the menu item ${id}`})}
})
router.post('/menu', (request, response) => {
    const { id, name, description, price, url } = request.body
    const found = foods.find(food => food.id.toString() === id.toString())
    if (found) response.send({ error: { message: `${name} already exists`} })
    else foods.push({name, description, price, url})
})


module.exports = router