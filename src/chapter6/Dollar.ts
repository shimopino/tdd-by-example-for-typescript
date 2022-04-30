import { Money } from './Money';

export class Dollar extends Money {
  constructor(amount: number) {
    super();
    this.amount = amount;
  }

  public times(multiplier: number) {
    return new Dollar(this.amount * multiplier);
  }
}
