#!/usr/bin/env bash
yarn doc
cd ../website
mv -f ../SEELE/doc/* ./seele-ui
git add .
git commit -m "update"
git push origin master -f
cd ../SEELE
