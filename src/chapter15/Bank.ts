import { Expression } from './Expression';
import { Pair } from './Pair';

export class Bank {
  private rates = new Map<number, number>();

  public reduce(source: Expression, to: string) {
    return source.reduce(this, to);
  }

  public addRate(from: string, to: string, rate: number) {
    this.rates.set(new Pair(from, to).hashCode(), rate);
  }

  public rate(from: string, to: string) {
    if (from === to) return 1;
    return this.rates.get(new Pair(from, to).hashCode());
  }
}
