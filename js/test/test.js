const {add} = require('../try')

test('add 1 and 2 to equal 3', () => {
    expect(add(1,2)).toBe(3)
})