import formatNumber from '../FormatNumber';

test('should format', () => {
  expect(formatNumber('8 (927) 000-00-00')).toEqual('+79270000000');
});

test('should format', () => {
  expect(formatNumber('+86 000 000 0000')).toEqual('+860000000000');
});
