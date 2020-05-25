class Character {
  constructor() {
    this.errors = new Map([
      [203, 'Non-Authoritative Information'],
      [400, 'Bad Request'],
      [404, 'page does not found'],
      [408, 'Request Timeout'],
      [414, 'Request-URL Too Long'],
      [502, 'Bad Gateway'],
      [504, 'Gateway Timeout'],
    ]);
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    throw new Error('Такого кода нет');
  }
}

export default Character;
