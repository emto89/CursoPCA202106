import { CapitalizadaPipe } from './capitalizada.pipe';

describe('CapitalizadaPipe', () => {
  it('create an instance', () => {
    const pipe = new CapitalizadaPipe();
    expect(pipe).toBeTruthy();
  });
});
