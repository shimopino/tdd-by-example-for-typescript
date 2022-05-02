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

## 参考リンク

- [いろいろな .config.js で型の補完を効かせる方法まとめ](https://zenn.dev/jay_es/articles/2021-04-22-config-js)
- [TDD Boot Camp 2020 Online #1 基調講演/ライブコーディング](https://youtu.be/Q-FJ3XmFlT8?t=1146)
- [テストコードのリファクタリングが目指すもの](https://youtu.be/AKCfYuDhvXM?t=3380)
