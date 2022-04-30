import { Money } from './Money';

export class Dollar extends Money {
  constructor(amount: number, currency: string) {
    super(amount, currency);
  }

  public times(multiplier: number) {
    return Money.dollar(this.amount * multiplier);
  }
}
