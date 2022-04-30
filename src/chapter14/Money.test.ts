import { describe, expect, it } from 'vitest';
import { Bank } from './Bank';
import { Money } from './Money';
import { Sum } from './Sum';

describe('多国籍通貨の計算', () => {
  it.todo(
    '異なる通過の2つの金額を足し、通貨間の為替レートに基づいて換算された金額を得る'
  );

  it('金額（通貨単位あたりの額）に数値（通貨単位数）を掛け、金額を得る', () => {
    // const five = new Dollar(5);
    const five = Money.dollar(5);
    expect(five.times(2)).toEqual(Money.dollar(10));
    expect(five.times(3)).toEqual(Money.dollar(15));
  });

  it.todo('Moneyの丸め処理をどうするのか？');

  it('値が同じ場合は等しいと判断される', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy();
    expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy();

    expect(Money.franc(5).equals(Money.dollar(5))).toBeFalsy();
  });

  it.todo('Dollarオブジェクトをハッシュテーブルのキーとして取り扱う');

  it.todo('nullとの等価性比較');

  it('通過の概念を導入する', () => {
    expect(Money.dollar(1).currency()).toBe('USD');
    expect(Money.franc(1).currency()).toBe('CHF');
  });

  it('同じ通貨単位での足し算（$5 + $5 = $10）を行う', () => {
    const five = Money.dollar(5);
    const sum = five.plus(five);
    const bank = new Bank();
    const reduced = bank.reduce(sum, 'USD');

    expect(reduced).toEqual(Money.dollar(10));
  });

  it('2つのMoneyの合計がSumのインスタンスを返す', () => {
    const five = Money.dollar(5);
    const sum = five.plus(five);

    expect(sum.augend).toEqual(five);
    expect(sum.addend).toEqual(five);
  });

  it('足し算の結果にMoneyが返ってくることを確認する', () => {
    const sum = new Sum(Money.dollar(3), Money.dollar(4));
    const bank = new Bank();
    const result = bank.reduce(sum, 'USD');

    expect(result).toEqual(Money.dollar(7));
  });

  it('reduceがMoneyを受け取ることができる', () => {
    const bank = new Bank();
    const result = bank.reduce(Money.dollar(1), 'USD');

    expect(result).toEqual(Money.dollar(1));
  });

  it.todo('異なる通貨単位での足し算（$5 + 10 CHF = $10）を行う');
});
