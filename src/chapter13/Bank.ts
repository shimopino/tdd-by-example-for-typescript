import { Expression } from './Expression';
import { Money } from './Money';
import { Sum } from './Sum';

export class Bank {
  public reduce(source: Expression, to: string) {
    if (source instanceof Money) {
      return source as Money;
    }

    const sum = source as Sum;
    return sum.reduce(to);
  }
}
