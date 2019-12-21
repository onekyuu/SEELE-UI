#!/bin/env bash
yarn doc
cd ../SEELE-UI-PAGE
mv -f ../SEELE/doc/* ./
git add .
git commit -m "update"
git push origin master -f
cd ../SEELE
