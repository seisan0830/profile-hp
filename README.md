このプロジェクトは Next.js + Tailwind CSS + shadcn/ui による自己紹介サイトです。Vercel デプロイを前提に構成しています。

## Getting Started

開発サーバを起動:

```bash
npm run dev
```

ブラウザで `http://localhost:3000` を開いて確認します。

トップページは `app/page.tsx` を編集してください。セクションは `components/site/sections/*` にあります。

UI コンポーネントは `components/ui/*`（shadcn/ui）に生成されています。

## デプロイ（Vercel）

1. リポジトリを GitHub にプッシュ
2. Vercel で「New Project」→ リポジトリを選択 → `npm run build` を自動設定
3. 環境変数があれば Vercel の Project Settings で設定
4. デプロイ完了
