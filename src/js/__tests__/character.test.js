import {
  describe, expect,
} from '@jest/globals';
import ErrorRepository from '../characters/errorRepository';

describe('Генератор кодов', () => {
  test('Пришел правильный код', () => {
    const received = new ErrorRepository();

    expect(received.translate(203))
      .toEqual('Non-Authoritative Information');
  });

  test('Проверка если кода такого нет', () => {
    const received = new ErrorRepository();

    expect(received.translate(23))
      .toBe('Такого кода нет');
  });
});
