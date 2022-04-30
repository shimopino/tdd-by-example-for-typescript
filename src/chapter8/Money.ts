export class Money {
  protected amount: number;

  public equals(other: Money) {
    const isSameAmount = this.amount === other.amount;
    const isSameClass = this.constructor.name === other.constructor.name;

    return isSameAmount && isSameClass;
  }
}
