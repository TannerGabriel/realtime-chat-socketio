const input = document.querySelector('#textarea')
const messages = document.querySelector('#messages')
const username = document.querySelector('#username')
const send = document.querySelector('#send')

const socket = io.connect('localhost:3000')

send.onclick = () => {
	const message = {
		name: username.value,
		content: input.value,
	}
	insertMessage(message)

	const messageObj = {
		name: username.value,
		content: input.value,
	}
	socket.emit('Send', messageObj)
}

socket.on('Send', (message) => {
	insertMessage(message)
})

function insertMessage(messageObj) {
	const message = document.createElement('div')
	message.setAttribute('class', 'chat-message')
	message.textContent = `${messageObj.name}: ${messageObj.content}`
	messages.appendChild(message)
	messages.insertBefore(message, messages.firstChild)
}