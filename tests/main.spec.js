const { normalizePort } = require('../utils/util')

describe('normalizePort', () => {
	it('isEmpty', () => {
		expect(normalizePort()).toBe(undefined)
	})

	it('isValid', () => {
		expect(normalizePort(0)).toBe(0)
		expect(normalizePort('0')).toBe(0)
		expect(normalizePort(10)).toBe(10)
		expect(normalizePort('10')).toBe(10)
		expect(normalizePort('11')).toBe(10)
	})
})