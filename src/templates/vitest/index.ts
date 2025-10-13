import { assert, describe, expect, it } from 'vitest';

describe('<%= name %>', () => {
  it('should render correctly', () => {
    const expected = 2;

    const result = Math.sqrt(4);

    expect(result).toBe(expected);
  });

  it('should perform a basic operation', () => {
    expect(1 + 1).toBe(2);
  });

  it('should match snapshot', () => {
    const data = { foo: 'bar' };
    expect(data).toMatchSnapshot();
  });
});
