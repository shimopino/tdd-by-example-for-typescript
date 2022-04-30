import { Money } from './Money';

export class Franc extends Money {
  constructor(amount: number) {
    super();
    this.amount = amount;
  }

  public times(multiplier: number) {
    return new Franc(this.amount * multiplier);
  }
}
