#!/usr/bin/env fish

npm run build && 
  cd ../digital-menu-build/ && 
  git init && 
  git add . && 
  git commit -m "deploy" && 
  git remote add origin git@github.com:pizzariacolosso/digital-menu.git && 
  git push -u --force origin main && 
  cd ../ && rm -rf digital-menu-build/

