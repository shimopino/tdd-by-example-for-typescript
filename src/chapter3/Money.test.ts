import { describe, expect, it } from 'vitest';
import { Dollar } from './Money';

describe('多国籍通貨の計算', () => {
  it.todo(
    '異なる通過の2つの金額を足し、通貨間の為替レートに基づいて換算された金額を得る'
  );

  it('金額（通貨単位あたりの額）に数値（通貨単位数）を掛け、金額を得る', () => {
    const five = new Dollar(5);

    const product2 = five.times(2);
    expect(product2.amount).toBe(10);

    const product3 = five.times(3);
    expect(product3.amount).toBe(15);
  });

  it.todo('amountをprivateにする');

  it.todo('Dollarの副作用をどのように取り扱うのか？');

  it.todo('Moneyの丸め処理をどうするのか？');

  it.todo('値が同じ場合は等しいと判断される');

  it.todo('Dollarオブジェクトをハッシュテーブルのキーとして取り扱う');
});
