const input = document.querySelector('#textarea')
const messages = document.querySelector('#messages')
const username = document.querySelector('#username')
const send = document.querySelector('#send')

const socket = io.connect('localhost:3000')

send.onclick = () => {
	// Get the data of the user input and save it in a variable
	const message = {
		name: username.value,
		content: input.value,
	}

	if(validateInput(message)) {
		// Insert the message into the UI
		insertMessage(message)

		// Send the message to other sockets
		socket.emit('Send', message)
	}
	else {
		console.log('Message or username isn\'t valid')
	}
}

// Listen to the send event
socket.on('Send', (message) => {
	// Insert messages form other sockets into the UI
	insertMessage(message)
})

/**
 * Insert a message into the UI
 * @param {Message that will be displayed in the UI} messageObj
 */
function insertMessage(messageObj) {
	// Create a div object which will hold the message
	const message = document.createElement('div')

	// Set the attribute of the message div
	message.setAttribute('class', 'chat-message')
	message.textContent = `${messageObj.name}: ${messageObj.content}`

	// Append the message to our chat div
	messages.appendChild(message)

	// Insert the message as the first message of our chat
	messages.insertBefore(message, messages.firstChild)
}

/**
 * Checks if the user input is valid
 * @param {Message that will be validated} message
 */
function validateInput(message) {
	return !(message.name.trim().length == 0 || message.content.trim().length == 0
	|| message.name == undefined || message.content == undefined
	|| message.name == null || message.content == null
	|| message.name == '' || message.content == '')
}