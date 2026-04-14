# Pokabeya 開発ルール

## デプロイフロー

**全ての変更はPRを経由してmainにマージする。直接mainへのpushは禁止。**

### 手順

1. **featureブランチを作成**
   ```
   git checkout main && git pull origin main
   git checkout -b feature/<変更内容>
   ```

2. **変更をコミット**
   ```
   git add <対象ファイル>
   git commit -m "feat/fix/chore: 変更内容の説明"
   ```

3. **プッシュしてPRを作成**
   ```
   git push -u origin feature/<変更内容>
   gh pr create --title "変更タイトル" --body "変更の説明"
   ```

4. **PRをマージ**
   - Vercelのプレビューデプロイで表示確認
   - 問題なければマージ
   ```
   gh pr merge <PR番号> --merge
   ```

5. **自動デプロイ**
   - mainへのマージでVercelが本番に自動デプロイ

### ブランチ命名規則

- `feature/<内容>` — 新機能・ページ追加
- `fix/<内容>` — バグ修正
- `chore/<内容>` — 設定変更・リファクタ

### コミットメッセージ

`<type>: 日本語で簡潔に説明`

- `feat:` 新機能
- `fix:` バグ修正
- `chore:` 設定・雑務

## プロジェクト構成

- `site/` — Next.js 16 + Tailwind CSS 4 のソースコード
- `docs/` — 設計書（コンテキスト・参考資料、デプロイ対象外）

## Vercel設定

- リポジトリ: `albertoshonan/pokabeya`
- Root Directory: `site`
- フレームワーク: Next.js（自動検出）
