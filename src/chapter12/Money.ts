export class Money {
  protected _amount: number;
  protected _currency: string;

  constructor(amount: number, currency: string) {
    this._amount = amount;
    this._currency = currency;
  }

  public equals(other: Money) {
    const isSameAmount = this._amount === other._amount;
    const isSameCurrency = this._currency === other._currency;

    return isSameAmount && isSameCurrency;
  }

  public times(multiplier: number) {
    return new Money(this._amount * multiplier, this._currency);
  }

  public plus(other: Money) {
    return new Money(this._amount + other._amount, this._currency);
  }

  public currency(): string {
    return this._currency;
  }

  public static dollar(amount: number): Money {
    return new Money(amount, 'USD');
  }

  public static franc(amount: number): Money {
    return new Money(amount, 'CHF');
  }
}
