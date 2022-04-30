import { describe, expect, it } from 'vitest';
import { Dollar } from './Dollar';
import { Franc } from './Franc';

describe('多国籍通貨の計算', () => {
  it.todo(
    '異なる通過の2つの金額を足し、通貨間の為替レートに基づいて換算された金額を得る'
  );

  it('金額（通貨単位あたりの額）に数値（通貨単位数）を掛け、金額を得る', () => {
    const five = new Dollar(5);

    expect(five.times(2)).toEqual(new Dollar(10));

    expect(five.times(3)).toEqual(new Dollar(15));
  });

  it.skip('[↑で完了] amountをprivateにする');

  it.todo('Dollarの副作用をどのように取り扱うのか？');

  it.todo('Moneyの丸め処理をどうするのか？');

  it('値が同じ場合は等しいと判断される', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
    expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy();

    expect(new Franc(5).equals(new Franc(5))).toBeTruthy();
    expect(new Franc(5).equals(new Franc(6))).toBeFalsy();

    expect(new Franc(5).equals(new Dollar(5))).toBeFalsy();
  });

  it.todo('Dollarオブジェクトをハッシュテーブルのキーとして取り扱う');

  it.todo('nullとの等価性比較');

  it.todo('他のオブジェクトとの等価性比較');
});
