import { Money } from './Money';

export class Franc extends Money {
  constructor(amount: number, currency: string) {
    super(amount, currency);
  }

  public times(multiplier: number) {
    return Money.franc(this.amount * multiplier);
  }
}
