import { Dollar } from './Dollar';

export class Money {
  protected amount: number;

  public equals(other: Money) {
    const isSameAmount = this.amount === other.amount;
    const isSameClass = this.constructor.name === other.constructor.name;

    return isSameAmount && isSameClass;
  }

  public static dollar(amount: number): Money {
    return new Dollar(amount);
  }
}
