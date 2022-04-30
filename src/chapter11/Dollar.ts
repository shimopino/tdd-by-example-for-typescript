import { Money } from './Money';

export class Dollar extends Money {
  constructor(amount: number, currency: string) {
    super(amount, currency);
  }
}
