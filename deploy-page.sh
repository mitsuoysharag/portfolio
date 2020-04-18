npm run build
cd dist
git init
git add -A
git commit -m 'deploy page'
git push -f https://github.com/mitsuoysharag/portfolio.git  master:gh-pages