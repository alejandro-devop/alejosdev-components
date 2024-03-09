#!/bin/bash

rm -rf node_modules
rm -rf yarn.lock

yarn install

yarn link @alejosdev/theme-provider
echo "Deps reseted!"
