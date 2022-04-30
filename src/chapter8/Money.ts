import { Dollar } from './Dollar';
import { Franc } from './Franc';

export abstract class Money {
  protected amount: number;

  public equals(other: Money) {
    const isSameAmount = this.amount === other.amount;
    const isSameClass = this.constructor.name === other.constructor.name;

    return isSameAmount && isSameClass;
  }

  public abstract times(multiplier: number): Money;

  public static dollar(amount: number): Money {
    return new Dollar(amount);
  }

  public static franc(amount: number): Money {
    return new Franc(amount);
  }
}
