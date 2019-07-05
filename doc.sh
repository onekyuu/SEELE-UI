#!/bin/env bash
yarn doc
git checkout gh-pages
mv -f doc/* ./
git add .
git commit -m "update"
git push --set-upstream origin gh-pages -f
git checkout master