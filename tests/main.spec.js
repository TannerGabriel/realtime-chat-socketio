const { normalizePort } = require('../utils/util')

describe('normalizePort', () => {
	it('isEmpty', () => {
		expect(normalizePort()).toBe(undefined)
	})

	it('isValid', () => {
		expect(normalizePort(0)).toBe(0)
		expect(normalizePort('0')).toBe(0)
	})
})