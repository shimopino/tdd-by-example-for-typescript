import { Money } from './Money';

export class Franc extends Money {
  constructor(amount: number, currency: string) {
    super(amount, currency);
  }
}
