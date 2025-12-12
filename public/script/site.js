
const getFoods = async () => {
    const response = await fetch('/api/v1/menu')
    return await response.json()
}
const getMenu = async id => {
	const response = await fetch(`/api/v1/menu/${id}`)
	return await response.json()
}
const getEvent = async () => {
    const response = await fetch('/api/v1/events')
    return await response.json()
}
const getSpecificEvent = async id => {
	const response = await fetch(`/api/v1/events/${id}`)
	return await response.json()
}
const showMenuList = foods => {
    const menuList = document.querySelector('.menu-list')
	foods?.forEach(({id, name, description, price, url}) => {
		const menuItem = document.createElement("div")
		menuItem.className = "menu-item"
		menuItem.innerHTML = `
            <br>
            <h2>${name}</h2>
			<img src="${url}" alt="${name}">
			<p><strong>Price:</strong> $${price} | <strong>Description:</strong> ${description}</p>`
            menuList.appendChild(menuItem)
            
	})
}
const showEventList = events => {
    const eventList = document.querySelector('.event-list')
	events?.forEach(({ id, name, location, date, time }) => {
		const eventItem = document.createElement("div")
		eventItem.className = "event-item"
		eventItem.innerHTML = `
			<h3>${name}</h3>
			<h4><strong>Location:</strong> ${location} | <strong>Date and Time:</strong> ${date},  ${time}</h4>`
            eventList.appendChild(eventItem)
            
	})
}
;(async () => {
	const foods = await getFoods()
    const events = await getEvent()
	showMenuList(foods)
    showEventList(events)
})()