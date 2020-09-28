const helper = require ('./helper')

test('should return false because input is empty', () => {
    const result = helper.validator('fgfgfg', true, true)
    expect(result).toBe(false)
})

test('should return true', () => {
    const result = helper.validator('ahmad', false, true)
    expect(result).toBe(true)
})

test('should return false because input is not a number', () => {
    const result = helper.validator('ahmad', true, true)
    expect(result).toBe(false)
})

test('should return [user name is ahmad ,and the age is 33]', () => {
    const result = helper.joiner('ahmad', '33')
    expect(result).toBe('user name is ahmad ,and the age is 33')

})