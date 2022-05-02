# テスト駆動開発

[テスト駆動開発](https://www.amazon.co.jp/dp/B077D2L69C/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1) のサンプルを TypeScript で実装する。

## 環境構築

- [Vitest](https://vitest.dev/guide/) を使用する

## 注意事項

- 第 8 章、第 9 章、第 10 章では、JavaScript のモジュールの循環参照問題のため、テストコードの一部をコメントアウトしている
  - 参考記事
  - [TypeScript と Java との違いによるつまずきと「循環参照」](https://ky-yk-d.hatenablog.com/entry/2018/11/11/071020)
  - 同じファイル内にクラスを配置すれば解決するが、一旦このままにしておく
    - `npx tsc src/chapter10/*.ts` で出力したコードを解析すれば原因はわかる

## 次にやること

- 個人でアプリを開発するときに TDD を実践してみる
- Kata に載っている題材を使って TDD を実践してみる
  - [Katas to learn TDD](https://kata-log.rocks/tdd)
  - [テスト駆動開発の題材を目的別で紹介する](https://nihonbuson.hatenadiary.jp/entry/2021/08/16/090000#%E3%83%AC%E3%82%AC%E3%82%B7%E3%83%BC%E3%82%B3%E3%83%BC%E3%83%89%E3%81%AE%E3%83%AA%E3%83%95%E3%82%A1%E3%82%AF%E3%82%BF%E3%83%AA%E3%83%B3%E3%82%B0%E3%81%AE%E5%95%8F%E9%A1%8C)

## 参考リンク

- [いろいろな .config.js で型の補完を効かせる方法まとめ](https://zenn.dev/jay_es/articles/2021-04-22-config-js)
- [TDD Boot Camp 2020 Online #1 基調講演/ライブコーディング](https://youtu.be/Q-FJ3XmFlT8?t=1146)
- [テストコードのリファクタリングが目指すもの](https://youtu.be/AKCfYuDhvXM?t=3380)
