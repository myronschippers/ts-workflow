import randomNumber from './randomNumber';

test('generate random number between 1 and 100', () => {
  const numValue = randomNumber(1, 100);
  expect(numValue).toBeGreaterThanOrEqual(1);
  expect(numValue).toBeLessThanOrEqual(100);
});
