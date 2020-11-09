#!/usr/bin/env fish

npm run build && 
  cd ../digital-menu-build/ && 
  git init && 
  git add . && 
  git commit -m "deploy" && 
  git remote add origin https://github.com/pizzariacolosso/digital-menu.git && 
  git push --force "https://$GIT_USERNAME:$GIT_PASSWORD@github.com/pizzariacolosso/digital-menu.git" master && 
  cd ../ && rm -rf digital-menu-build/

