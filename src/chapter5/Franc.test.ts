import { describe, expect, it } from 'vitest';
import { Franc } from './Franc';

describe('多国籍通貨の計算', () => {
  it('金額（通貨単位あたりの額）に数値（通貨単位数）を掛け、金額を得る', () => {
    const five = new Franc(5);

    expect(five.times(2)).toEqual(new Franc(10));

    expect(five.times(3)).toEqual(new Franc(15));
  });
});