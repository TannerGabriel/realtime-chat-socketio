const input = document.getElementById('textarea')
const messages = document.getElementById('messages')
const username = document.querySelector('#username')
const send = document.getElementById('send')

send.onclick = () => {
	const message = document.createElement('div')
	message.setAttribute('class', 'chat-message')
	message.textContent = `${username.value}: ${input.value}`
	messages.appendChild(message)
	messages.insertBefore(message, messages.firstChild)
}