import { EllipsisPipe } from './ellipsis.pipe';

describe('EllipsisPipe', () => {

  let ellipsisPipe;

  beforeEach(() => {
    ellipsisPipe = new EllipsisPipe();
  });

  it('should truncate string when length is greater than param', () => {
    // Given
    const value = 'Bonjour!';
    const length = value.length - 1;

    // When
    const result = ellipsisPipe.transform(value, length);

    // Then
    expect(result).not.toBe(value);
    expect(result).toContain('...');
  });

  it('should not truncate string when length is lower than param', () => {
    // Given
    const value = 'Bonjour!';
    const length = value.length + 1;

    // When
    const result = ellipsisPipe.transform(value, length);

    // Then
    expect(result).toBe(value);
    expect(result).not.toContain('...');
  });

});
