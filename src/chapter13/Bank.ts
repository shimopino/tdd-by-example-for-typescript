import { Expression } from './Expression';

export class Bank {
  public reduce(source: Expression, to: string) {
    return source.reduce(to);
  }
}
