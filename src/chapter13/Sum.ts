import { Expression } from './Expression';
import { Money } from './Money';

export class Sum implements Expression {
  public augend: Money;
  public addend: Money;

  constructor(augend: Money, addend: Money) {
    this.augend = augend;
    this.addend = addend;
  }

  public reduce(to: string) {
    // @ts-expect-error Javaとはパッケージの概念が異なるため
    const amount = this.augend._amount + this.addend._amount;
    return new Money(amount, to);
  }
}
