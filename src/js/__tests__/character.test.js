import {
  describe, expect,
} from '@jest/globals';
import Character from '../characters/character';

describe('Генератор кодов', () => {
  test('Пришел правильный код', () => {
    const received = new Character();

    expect(received.translate(203))
      .toEqual('Non-Authoritative Information');
  });

  test('Проверка если кода такого нет', () => {
    const received = new Character();

    expect(() => { received.translate(23); })
      .toThrowError(new Error('Такого кода нет'));
  });
});
