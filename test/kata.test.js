const { Kata } = require('../src/kata');

describe('First story', () => {
  test('GIVEN [1,2,`a`,`b`]  WHEN logic THEN returns [1,2]', () => {
    const kata = new Kata();
    expect(kata.filter_list([1, 2, 'a', 'b'])).toStrictEqual([1, 2]);
  });

  test('GIVEN [1,`a`,`b`,0,15]  WHEN logic THEN returns [1,0,15]', () => {
    const kata = new Kata();
    expect(kata.filter_list([1, 'a', 'b', 0, 15])).toStrictEqual([1, 0, 15]);
  });
});




