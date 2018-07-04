#!/usr/bin/env bash


# build
echo ">>>>>>>>>> 打包 <<<<<<<<<<"
electronPackagerBin = $(npm bin)/electron-packager ./dist 'angular6-material2-aws-sdk' --platform=darwin --arch=x64 --out=packager --version=0.5.2 --overwrite
electronPackagerBin = $(npm bin)/electron-packager ./dist 'angular6-material2-aws-sdk' --platform=linux --arch=x64 --out=packager --version=0.5.2 --overwrite
electronPackagerBin = $(npm bin)/electron-packager ./dist 'angular6-material2-aws-sdk' --platform=win32 --arch=x64 --out=packager --version=0.5.2 --overwrite
electronPackagerBin = $(npm bin)/electron-packager ./dist 'angular6-material2-aws-sdk' --platform=win32 --arch=ia32 --out=packager --version=0.5.2 --overwrite

# zip
echo ">>>>>>>>>> 压缩 <<<<<<<<<<"
rm -f ./packager/angular6-material2-aws-sdk-*.zip
zip -ry ./packager/angular6-material2-aws-sdk-macOS-x64.zip ./packager/angular6-material2-aws-sdk-darwin-x64/angular6-material2-aws-sdk.app
zip -ry ./packager/angular6-material2-aws-sdk-linux-x64.zip ./packager/angular6-material2-aws-sdk-linux-x64
zip -ry ./packager/angular6-material2-aws-sdk-win32-x64.zip ./packager/angular6-material2-aws-sdk-win32-x64
zip -ry ./packager/angular6-material2-aws-sdk-win32-ia32.zip ./packager/angular6-material2-aws-sdk-win32-ia32
