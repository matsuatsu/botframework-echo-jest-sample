export class Money {
  constructor(
    public readonly amount: number,
    public readonly currency: string
  ) {}

  add(money: Money): Money {
    if (this.currency == money.currency) {
      return new Money(this.amount + money.amount, this.currency);
    }
  }

  equal(money: Money): boolean {
    const f1 = this.amount == money.amount;
    const f2 = this.currency == money.currency;
    if (f1 && f2) {
      return true;
    }
    return false;
  }

  toString(): string {
    return `${this.amount} ${this.currency}`;
  }
}
