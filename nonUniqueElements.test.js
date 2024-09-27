import nonUniqueElements from './nonUniqueElements';


test('returns non unique elements', () => {
  expect(nonUniqueElements([1, 2, 3, 1, 3])).toEqual([1, 3, 1, 3]);
  expect(nonUniqueElements([1, 2, 3, 4, 5])).toEqual([]);
  expect(nonUniqueElements([5, 5, 5, 5, 5])).toEqual([5, 5, 5, 5, 5]);
  expect(nonUniqueElements([10, 9, 10, 10, 9, 8])).toEqual([10, 9, 10, 10, 9]);
  expect(nonUniqueElements([])).toEqual([]);
  expect(nonUniqueElements([1])).toEqual([]);
  expect(nonUniqueElements([-1, -2, -1, -3, -1])).toEqual([-1, -1, -1]);
  expect(nonUniqueElements([0, 1, 0, 2, 0])).toEqual([0, 0, 0]);
  expect(nonUniqueElements([1, 'a', 1, 'b', 1, 'z', 5, 'z'])).toEqual([1, 1, 1, 'z', 'z']);
  expect(nonUniqueElements([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toEqual([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
})
