import { Dollar } from './Dollar';
import { Franc } from './Franc';

export class Money {
  protected amount: number;
  protected currency: string;

  constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }

  public equals(other: Money) {
    const isSameAmount = this.amount === other.amount;
    // const isSameClass = this.constructor.name === other.constructor.name;
    const isSameCurrency = this.currency === other.currency;

    return isSameAmount && isSameCurrency;
  }

  public times(multiplier: number) {
    return new Money(this.amount * multiplier, this.currency);
  }

  public getCurrency(): string {
    return this.currency;
  }

  public static dollar(amount: number): Money {
    return new Dollar(amount, 'USD');
  }

  public static franc(amount: number): Money {
    return new Franc(amount, 'CHF');
  }
}
