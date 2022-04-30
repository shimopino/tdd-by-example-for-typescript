import { Expression } from './Expression';
import { Sum } from './Sum';

export class Bank {
  public reduce(source: Expression, to: string) {
    const sum = source as Sum;
    return sum.reduce(to);
  }
}
