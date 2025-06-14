const Rover = require('./rover');

describe('Mars Rover (Node + Jest)', () => {
  test('inicia na posição 0.0:N', () => {
    const r = new Rover();
    expect(r.x).toBe(0);
    expect(r.y).toBe(0);
    expect(r.direction_index).toBe(0);
  });

  test('valida comando correto', () => {
    const r = new Rover();
    expect(r.validarComando('MLLR')).toBe(true);
  });

  test('valida comando incorreto', () => {
    const r = new Rover();
    expect(r.validarComando('MMX')).toBe(false);
  });

  test('move para o Oeste com wrap-around', () => {
    const r = new Rover();
    r.receberComando('LM');
    expect(r.x).toBe(0);
    expect(r.y).toBe(9);
    expect(r.direction_index).toBe(3);
  });

  test('move para o Leste com wrap-around', () => {
    const r = new Rover();
    r.receberComando('RMMMMMMMMMM');
    expect(r.x).toBe(0);
    expect(r.y).toBe(0);
    expect(r.direction_index).toBe(1);
  });

  test('move para o Sul com wrap-around', () => {
    const r = new Rover();
    r.receberComando('LLM');
    expect(r.x).toBe(9);
    expect(r.y).toBe(0);
    expect(r.direction_index).toBe(2);
  });

  test('move para o Norte (x incrementa)', () => {
    const r = new Rover();
    r.receberComando('M');
    expect(r.toString()).toBe('1.0:N');
  });

  test.each([
    ['MMMLLMMMMMMRMMMMMMLLLLLLMMMMMRRM', 7, 8, 3],
    ['MMRMMLMM', 4, 2, 0],
  ])('comando complexo %s', (commands, x, y, dirIndex) => {
    const r = new Rover();
    r.receberComando(commands);
    expect(r.x).toBe(x);
    expect(r.y).toBe(y);
    expect(r.direction_index).toBe(dirIndex);
  });
});