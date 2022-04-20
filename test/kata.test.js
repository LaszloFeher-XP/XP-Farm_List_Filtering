const { Kata } = require('../src/kata');

describe('First story', () => {
  test('GIVEN [1,2,`a`,`b`]  WHEN logic THEN returns [1,2]', () => {
    const kata = new Kata();
    expect(kata.filter_list([1, 2, 'a', 'b'])).toStrictEqual([1, 2]);
  });
});




