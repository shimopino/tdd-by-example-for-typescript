export class Money {
  protected amount: number;

  public equals(other: Money) {
    return this.amount === other.amount;
  }
}
