export class Franc {
  private amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  public times(multiplier: number) {
    return new Franc(this.amount * multiplier);
  }

  public equals(other: Franc) {
    return this.amount === other.amount;
  }
}
