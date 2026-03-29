#!/bin/bash
set -e

FTP_HOST="147.93.14.56"
FTP_USER="u955497626"
FTP_PASS='Local$Bots@26'
FTP_DIR="domains/localbots.com.br/public_html"

echo "🔨 Building..."
cd apps/web && npm run build && cd ../..

echo "📤 Uploading to Hostinger..."

upload() {
  curl -s -u "$FTP_USER:$FTP_PASS" --ftp-create-dirs -T "$1" "ftp://$FTP_HOST/$FTP_DIR/$2"
}

upload dist/apps/web/index.html "index.html"
upload dist/apps/web/.htaccess ".htaccess"
upload dist/apps/web/llms.txt "llms.txt"

for f in dist/apps/web/assets/*; do
  upload "$f" "assets/$(basename $f)"
done

for f in apps/web/public/*.png apps/web/public/*.jpg apps/web/public/*.svg apps/web/public/*.ico; do
  [ -f "$f" ] && upload "$f" "$(basename $f)"
done

echo "✅ Deploy concluído! Site no ar em www.localbots.com.br"
