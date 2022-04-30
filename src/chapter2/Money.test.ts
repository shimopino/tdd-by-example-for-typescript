import { describe, expect, it } from 'vitest';
import { Dollar } from './Money';

describe('多国籍通貨の計算', () => {
  it.todo(
    '異なる通過の2つの金額を足し、通貨間の為替レートに基づいて換算された金額を得る'
  );
  it('金額（通貨単位あたりの額）に数値（通貨単位数）を掛け、金額を得る', () => {
    const five = new Dollar(5);

    five.times(2);

    expect(five.amount).toBe(10);
  });

  it.todo('amountをprivateにする');

  it.todo('Dollarの副作用をどのように取り扱うのか？');

  it.todo('Moneyの真詰め処理をどうするのか？');
});
