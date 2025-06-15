# Money Shift Media - 404エラー修正版 v2

## 修正内容

### 1. メインページ (app/page.tsx)
**問題**: 環境変数依存のfetch処理でエラーが発生
**修正**: 
- `VERCEL_URL`環境変数を使用した相対URL処理に変更
- エラーハンドリングの強化
- フォールバック処理の追加

```typescript
// 修正前
const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'https://money-shift.jp'}/api/articles?limit=6`

// 修正後  
const response = await fetch(`${process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'}/api/articles?limit=6`
```

### 2. APIルート (app/api/articles/route.ts)
**問題**: データベース接続エラーの可能性
**修正**:
- メモリ内サンプルデータを使用
- データベース依存を一時的に回避
- エラーハンドリングの強化

### 3. テストページ追加 (app/test/page.tsx)
**目的**: 段階的デバッグのため
**機能**:
- 基本的なNext.js動作確認
- ドメイン情報の表示
- ホームページへのリンク

## デプロイ手順

### 1. GitHubへのアップロード
```bash
# 既存リポジトリの更新
git add .
git commit -m "Fix 404 error - v2 with improved error handling"
git push origin main
```

### 2. Vercelでの再デプロイ
1. Vercelダッシュボードで「Redeploy」を実行
2. ビルドログを確認
3. デプロイ完了後、以下のURLでテスト:
   - メインページ: `https://money-shift.vercel.app`
   - テストページ: `https://money-shift.vercel.app/test`
   - API: `https://money-shift.vercel.app/api/articles`

## トラブルシューティング

### まだ404エラーが発生する場合
1. **テストページを確認**: `/test` にアクセスして基本動作を確認
2. **APIを直接テスト**: `/api/articles` にアクセスしてJSON応答を確認
3. **ビルドログを確認**: Vercelのビルドログでエラーメッセージを確認

### 環境変数の確認
以下の環境変数が正しく設定されていることを確認:
- `NEXTAUTH_SECRET`: 設定済み
- `NEXTAUTH_URL`: `https://money-shift.vercel.app`
- `NEXT_PUBLIC_APP_URL`: `https://money-shift.vercel.app`
- `DATABASE_URL`: Supabaseから自動設定

## 修正のポイント

1. **環境変数依存の削減**: ハードコーディングされたURLへの依存を減らし、Vercelの標準環境変数を使用
2. **エラーハンドリング強化**: fetch処理とAPI処理の両方でエラーハンドリングを改善
3. **段階的デバッグ**: テストページを追加して問題の切り分けを容易に
4. **データベース依存の回避**: 一時的にメモリ内データを使用してデータベース接続問題を回避

この修正版により、404エラーが解消され、サイトが正常に動作するはずです。

