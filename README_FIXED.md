# money-shift.jp メディアサイト - 修正版

## 修正内容

このバージョンでは、以下の問題を修正しました：

### 1. Prismaスキーマの修正
- 開発環境固有の出力パスを削除
- デフォルトの出力設定を使用するように変更

### 2. URL参照の修正
- 全ページファイルのlocalhost:3000参照をmoney-shift.jpに変更
- 環境変数名をNEXT_PUBLIC_APP_URLに統一
- メール送信機能のURL修正

### 3. 本番環境対応
- 環境変数の設定を本番環境用に最適化
- ビルド設定の改善

## デプロイ手順

詳細なデプロイ手順については、同梱の「deployment-guide.pdf」を参照してください。

## 主要な変更ファイル

- `prisma/schema.prisma` - 出力パス設定の削除
- `app/page.tsx` - URL参照の修正
- `app/business/page.tsx` - URL参照の修正
- `app/technology/page.tsx` - URL参照の修正
- `app/money/page.tsx` - URL参照の修正
- `app/life/page.tsx` - URL参照の修正
- `app/articles/[slug]/page.tsx` - URL参照の修正
- `app/admin/schedules/page.tsx` - URL参照の修正
- `app/admin/deliveries/page.tsx` - URL参照の修正
- `app/api/cron/send-newsletter/route.ts` - メール内URL修正

## 環境変数設定

以下の環境変数をVercelで設定してください：

```
DATABASE_URL=postgres://...
NEXTAUTH_URL=https://money-shift.jp
NEXTAUTH_SECRET=your-secret-key
NEXT_PUBLIC_APP_URL=https://money-shift.jp
EMAIL_FROM=shift@money-shift.jp
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASSWORD=your-sendgrid-api-key
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your-admin-password
ADMIN_EMAIL=admin@money-shift.jp
```

## 注意事項

- デプロイ前に必ずSendGridの設定を完了してください
- DNS設定の反映には最大48時間かかる場合があります
- 初回デプロイ後は管理画面でテストメールを送信して動作確認を行ってください

