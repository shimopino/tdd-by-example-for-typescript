import { Bank } from './Bank';
import { Expression } from './Expression';
import { Money } from './Money';

export class Sum implements Expression {
  public augend: Expression;
  public addend: Expression;

  constructor(augend: Expression, addend: Expression) {
    this.augend = augend;
    this.addend = addend;
  }

  public plus(addend: Expression): Expression {
    return null;
  }

  public reduce(bank: Bank, to: string) {
    const amount =
      // @ts-expect-error Javaとはパッケージの概念が異なるため
      this.augend.reduce(bank, to)._amount +
      // @ts-expect-error Javaとはパッケージの概念が異なるため
      this.addend.reduce(bank, to)._amount;
    return new Money(amount, to);
  }
}
