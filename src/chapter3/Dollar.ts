export class Dollar {
  public amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  public times(multiplier: number) {
    return new Dollar(this.amount * multiplier);
  }

  public equals(other: Dollar) {
    return this.amount === other.amount;
  }
}
